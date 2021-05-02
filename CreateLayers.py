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