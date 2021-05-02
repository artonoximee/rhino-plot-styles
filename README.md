## 1. The Excel file that contains everything

![screenshot Excel](https://gitlab.com/mlav.land/rhinoplotstyles/-/raw/master/images/screenShotXLS-1.jpg)

As you probably expect, we are taking the CTB function from AutoCAD as an example of managing plot styles.

Here, instead of a CTB file, the data is stored in an Excel file.


In red are the global informations:

1 - Layer hierarchy

2 - Full layer names

3 - Layer color

4 - Layer print color

5 - Layer linetype

In blue are the informations specific to each scale (1:1000 ; 1:500 ; 1:200 ; 1:100 ; 1:50)

6 - Line thickness (in pt)

7 - Line thickness (in mm)

8 - Pattern (for Illustrator only)


9a - Then we created a worksheet (createLayers) that recaps the full layer names and their rgb colors (will be used for step 3)

9a - And finally we created a worksheet for each scale, that recaps only the information of the specific scale (will be used for step 2) :


![sreenshot Excel](https://gitlab.com/mlav.land/rhinoplotstyles/-/raw/master/images/screenShotXLS-2.jpg)


## 2. The python script that generates all the .csv and .js files from the Excel file
This script generates three kinds of outputs that will be used in the next steps:
1. Will be used for step 3 : *layers.csv* (according to the createLayers worksheet in Excel)
2. Will be used for step 4 : *1000.csv* ; *500.csv* ; *200.csv* ; *100.csv* ; *50.csv* (plot styles for each scale)
3. Will be used for step 5 : *1000.js* ; *500.js* ; *200.js* ; *100.js* ; *50.js* (plot styles for each scale). These files are created to be used in Illustrator.

```
import pandas as pd # import pandas library : used to read xls and xlsx files (pandas library needs also xlrd and openyxl)
import csv # import csv library to handle csv reading and writing

scales = ['1000', '500', '200', '100', '50'] # set the scales in an array

def XLStoCSV(scales): # first function of the script : export each excel sheet into a CSV file
	x = 2 # initialize the sheet index

	for scale in scales: # loop through the scales
			file = pd.read_excel("MLAVPlotStyles.xlsx", sheet_name=x) # open the excel file at the sheet specified by x
			file.to_csv(scale + ".csv", index = None, header=True) # create the corresponding csv file
			x += 1 # indent the sheet index

	file = pd.read_excel("MLAVPlotStyles.xlsx", sheet_name=1) # open the excel file at the sheet that specifies the layer list and its rgb values
	file.to_csv("layers.csv", index = None, header=True) # create the corresponding csv file

def CSVtoJS(scales): # second function of the script : get infos from CSV to generate JS files, ready to use for Adobe Illustrator
	for scale in scales: # loop through each scale
		f = open(scale + ".js", "w") # create the corresponding .js file
		f.write("var doc = app.activeDocument;\r\nfunction makeColor(r,g,b){\r\n  var c = new RGBColor();\r\n  c.red = r;\r\n  c.green = g;\r\n  c.blue = b;\r\n  return c;\r\n};\r\n") # write the first part of the constant code in JS
		f.write("const continuous = [];\r\nconst dots = new Array(0, 1);\r\nconst dashed = new Array(2, 3);\r\nconst dashdot = new Array(2, 2, 0, 2);\r\nvar lines;\r\n") # write the first part of the constant code in JS
		
		with open(scale + ".csv") as csvfile: # open the csv file corresponding to the current scale
				reader = csv.reader(csvfile) 
				next(reader) # jump to next line (first line is data headers)
				for row in reader: # iterate through each row
					layer_name = row[0] # put the values from the columns in variables 
					r = row[1]
					g = row[2]
					b = row[3]
					linetype = row[4]
					thickness = row[5]
					pattern = row[7]
					f.write("\r\ntry {\r\n  lines = doc.layers['" + layer_name + "'].pathItems;\r\n\r\n  for (i = 0; i < lines.length; i++) {\r\n    pathArt = lines[i];\r\n    pathArt.strokeDashes = " + linetype + ";\r\n    pathArt.strokeColor = makeColor(" + r + "," + g + "," + b + ");\r\n    pathArt.strokeWidth = " + thickness + ";\r\n") # write the corresponding code in js for illustrator
					if pattern != '[Sans]': # if the layer contains a pattern the following line is added to handle it in illustrator
						f.write("    pathArt.filled = true;\r\n    pathArt.fillColor = doc.swatches['"+ pattern + "'].color;")
					f.write("  }\r\n  } catch (e) {\r\n}") # end of the js code for one layer

		f.close() # close the js file

if( __name__ == "__main__" ): # perform function
	XLStoCSV(scales)
	CSVtoJS(scales)
```

## 3. The python script that creates the right layers in Rhino
We know we could use a template file to create this, but in our practice, we find it more practical to generate our working layers this way.

```
import csv # import csv library to handle csv reading and writing
import rhinoscriptsyntax as rs # import rhinoscriptsyntax to handle rhino actions

def OpenCSV(): # first function of the script : open the csv file 
	with open("layers.csv") as csvfile:
			reader = csv.reader(csvfile)
			next(reader) # jump to next line (first line is data headers)
			for row in reader: # iterate through each row
				full_layer_name = row[0] # put the values from the columns in variables 
				color = rs.CreateColor(row[1], row[2], row[3])
				CreateLayer(full_layer_name, color) # send variables to the next function

def CreateLayer(full_layer_name, color): # second function of the script : create the layer in Rhino
	layer_names = rs.LayerNames() # create array of existing layers in Rhino
	for layer_name in layer_names: # iterate through each layer
		if layer_name == full_layer_name: # if layer already exists update its color
			rs.LayerColor(layer_name, color)
		else: # if it doesn't exist create the layer
			rs.AddLayer(full_layer_name, color)

if( __name__ == "__main__" ): # perform function
	OpenCSV()
```

## 4. The python script that assign the right plot style according to a chosen scale in Rhino
For this step we used this [.rvb script](https://wiki.mcneel.com/acadplot2rhino) as a starting point. We recreated it in python, and changed it a bit.
The idea is that the user runs the python script, choses an option of scale in a popup, and the script loads the right csv to apply the right plot style to each layer.
```
import csv # import csv library to handle csv reading and writing
import rhinoscriptsyntax as rs # import rhinoscriptsyntax to handle rhino actions

def SetPrintInfo(): # first function : options in a popup in Rhino
	options = ('50e', '100e', '200e', '500e', '1000e')
	if options:
		result = rs.ListBox(options, "Pick an option")
		if result == "50e": # get the option from the user
			filename = "50.csv" # fetch the right csv, corresponding to the user's choice
		elif result == "100e":
			filename = "100.csv"
		elif result == "200e":
			filename = "200.csv"
		elif result == "500e":
			filename = "500.csv"
		elif result == "1000e":
			filename = "1000.csv"
		else:
			exit()
		OpenCSV(filename)

def OpenCSV(filename): # second function : open the csv file containing the plot styles infos	
	with open(filename) as csvfile:
		reader = csv.reader(csvfile)
		next(reader) # jump to next line (first line is data headers)
		for row in reader: # iterate through each row
			full_layer_name = row[0] # put the values from the columns in variables
			print_color = rs.CreateColor(row[1], row[2], row[3])
			linetype = row[4]
			thickness = row[6]
			SetLayerPrintValues(full_layer_name, print_color, linetype, thickness) # send variables to the next function

def SetLayerPrintValues(full_layer_name, print_color, linetype, thickness): # third function : assign the values from the csv to the Rhino layers
	layer_names = rs.LayerNames() # create array of existing layers in Rhino
	for layer_name in layer_names:# iterate through each layer
		if layer_name == full_layer_name: # select the layer
			rs.LayerPrintColor(layer_name, print_color) # assign print color
			rs.LayerLinetype(layer_name, linetype) # assign linetype
			rs.LayerPrintWidth(layer_name, float(thickness)) # assign line thickness

if( __name__ == "__main__" ): # perform function
	SetPrintInfo()
```

## 5. The .js scripts that can be used in Illustrator
These files are generated by the script in step 2. They are used in the following case : something has been drawn in Rhino, but the layout and plot styles are handled in Illustrator.

When the exported Rhino file is opened in Illustrator, the .js script will apply the same plot styles as the one created for Rhino.