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