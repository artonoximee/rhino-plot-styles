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