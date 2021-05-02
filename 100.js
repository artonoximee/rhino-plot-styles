var doc = app.activeDocument;
function makeColor(r,g,b){
  var c = new RGBColor();
  c.red = r;
  c.green = g;
  c.blue = b;
  return c;
};
const continuous = [];
const dots = new Array(0, 1);
const dashed = new Array(2, 3);
const dashdot = new Array(2, 2, 0, 2);
var lines;

try {
  lines = doc.layers['Dessin'].pathItems;

  for (i = 0; i < lines.length; i++) {
    pathArt = lines[i];
    pathArt.strokeDashes = continuous;
    pathArt.strokeColor = makeColor(255,255,255);
    pathArt.strokeWidth = 0.0;
  }
  } catch (e) {
}
try {
  lines = doc.layers['Dessin::block'].pathItems;

  for (i = 0; i < lines.length; i++) {
    pathArt = lines[i];
    pathArt.strokeDashes = continuous;
    pathArt.strokeColor = makeColor(255,255,255);
    pathArt.strokeWidth = 0.0;
    pathArt.filled = true;
    pathArt.fillColor = doc.swatches['Avec'].color;  }
  } catch (e) {
}
try {
  lines = doc.layers['Dessin::traitCoupe'].pathItems;

  for (i = 0; i < lines.length; i++) {
    pathArt = lines[i];
    pathArt.strokeDashes = continuous;
    pathArt.strokeColor = makeColor(0,0,0);
    pathArt.strokeWidth = 0.15;
  }
  } catch (e) {
}
try {
  lines = doc.layers['Dessin::texte'].pathItems;

  for (i = 0; i < lines.length; i++) {
    pathArt = lines[i];
    pathArt.strokeDashes = continuous;
    pathArt.strokeColor = makeColor(0,0,0);
    pathArt.strokeWidth = 0.1;
  }
  } catch (e) {
}
try {
  lines = doc.layers['Dessin::cote'].pathItems;

  for (i = 0; i < lines.length; i++) {
    pathArt = lines[i];
    pathArt.strokeDashes = continuous;
    pathArt.strokeColor = makeColor(0,0,0);
    pathArt.strokeWidth = 0.15;
  }
  } catch (e) {
}
try {
  lines = doc.layers['Dessin::personnage'].pathItems;

  for (i = 0; i < lines.length; i++) {
    pathArt = lines[i];
    pathArt.strokeDashes = continuous;
    pathArt.strokeColor = makeColor(0,0,0);
    pathArt.strokeWidth = 0.15;
  }
  } catch (e) {
}
try {
  lines = doc.layers['Dessin::layout'].pathItems;

  for (i = 0; i < lines.length; i++) {
    pathArt = lines[i];
    pathArt.strokeDashes = continuous;
    pathArt.strokeColor = makeColor(0,0,0);
    pathArt.strokeWidth = 0.0;
  }
  } catch (e) {
}
try {
  lines = doc.layers['Hachures'].pathItems;

  for (i = 0; i < lines.length; i++) {
    pathArt = lines[i];
    pathArt.strokeDashes = continuous;
    pathArt.strokeColor = makeColor(0,0,0);
    pathArt.strokeWidth = 0.0;
  }
  } catch (e) {
}
try {
  lines = doc.layers['Hachures::hachBeton'].pathItems;

  for (i = 0; i < lines.length; i++) {
    pathArt = lines[i];
    pathArt.strokeDashes = continuous;
    pathArt.strokeColor = makeColor(0,0,0);
    pathArt.strokeWidth = 0.0;
  }
  } catch (e) {
}
try {
  lines = doc.layers['Hachures::hachBois'].pathItems;

  for (i = 0; i < lines.length; i++) {
    pathArt = lines[i];
    pathArt.strokeDashes = continuous;
    pathArt.strokeColor = makeColor(0,0,0);
    pathArt.strokeWidth = 0.0;
  }
  } catch (e) {
}
try {
  lines = doc.layers['Hachures::hachMetal'].pathItems;

  for (i = 0; i < lines.length; i++) {
    pathArt = lines[i];
    pathArt.strokeDashes = continuous;
    pathArt.strokeColor = makeColor(0,0,0);
    pathArt.strokeWidth = 0.0;
  }
  } catch (e) {
}
try {
  lines = doc.layers['Hachures::hachIsolant'].pathItems;

  for (i = 0; i < lines.length; i++) {
    pathArt = lines[i];
    pathArt.strokeDashes = continuous;
    pathArt.strokeColor = makeColor(0,0,0);
    pathArt.strokeWidth = 0.0;
  }
  } catch (e) {
}
try {
  lines = doc.layers['1-GO'].pathItems;

  for (i = 0; i < lines.length; i++) {
    pathArt = lines[i];
    pathArt.strokeDashes = continuous;
    pathArt.strokeColor = makeColor(255,255,255);
    pathArt.strokeWidth = 0.0;
  }
  } catch (e) {
}
try {
  lines = doc.layers['1-GO::structMetal'].pathItems;

  for (i = 0; i < lines.length; i++) {
    pathArt = lines[i];
    pathArt.strokeDashes = continuous;
    pathArt.strokeColor = makeColor(0,0,0);
    pathArt.strokeWidth = 0.0;
  }
  } catch (e) {
}
try {
  lines = doc.layers['1-GO::structBois'].pathItems;

  for (i = 0; i < lines.length; i++) {
    pathArt = lines[i];
    pathArt.strokeDashes = continuous;
    pathArt.strokeColor = makeColor(0,0,0);
    pathArt.strokeWidth = 0.0;
  }
  } catch (e) {
}
try {
  lines = doc.layers['1-GO::structBeton'].pathItems;

  for (i = 0; i < lines.length; i++) {
    pathArt = lines[i];
    pathArt.strokeDashes = continuous;
    pathArt.strokeColor = makeColor(0,0,0);
    pathArt.strokeWidth = 0.0;
  }
  } catch (e) {
}
try {
  lines = doc.layers['1-GO::maconnerie'].pathItems;

  for (i = 0; i < lines.length; i++) {
    pathArt = lines[i];
    pathArt.strokeDashes = continuous;
    pathArt.strokeColor = makeColor(0,0,0);
    pathArt.strokeWidth = 0.0;
  }
  } catch (e) {
}
try {
  lines = doc.layers['1-GO::fondations'].pathItems;

  for (i = 0; i < lines.length; i++) {
    pathArt = lines[i];
    pathArt.strokeDashes = continuous;
    pathArt.strokeColor = makeColor(0,0,0);
    pathArt.strokeWidth = 0.0;
  }
  } catch (e) {
}
try {
  lines = doc.layers['2-CC'].pathItems;

  for (i = 0; i < lines.length; i++) {
    pathArt = lines[i];
    pathArt.strokeDashes = continuous;
    pathArt.strokeColor = makeColor(255,255,255);
    pathArt.strokeWidth = 0.0;
  }
  } catch (e) {
}
try {
  lines = doc.layers['2-CC::isolation'].pathItems;

  for (i = 0; i < lines.length; i++) {
    pathArt = lines[i];
    pathArt.strokeDashes = continuous;
    pathArt.strokeColor = makeColor(0,0,0);
    pathArt.strokeWidth = 0.0;
  }
  } catch (e) {
}
try {
  lines = doc.layers['2-CC::couverture'].pathItems;

  for (i = 0; i < lines.length; i++) {
    pathArt = lines[i];
    pathArt.strokeDashes = continuous;
    pathArt.strokeColor = makeColor(0,0,0);
    pathArt.strokeWidth = 0.0;
  }
  } catch (e) {
}
try {
  lines = doc.layers['2-CC::menuiserieExt'].pathItems;

  for (i = 0; i < lines.length; i++) {
    pathArt = lines[i];
    pathArt.strokeDashes = continuous;
    pathArt.strokeColor = makeColor(0,0,0);
    pathArt.strokeWidth = 0.0;
  }
  } catch (e) {
}
try {
  lines = doc.layers['2-CC::vitrageExt'].pathItems;

  for (i = 0; i < lines.length; i++) {
    pathArt = lines[i];
    pathArt.strokeDashes = continuous;
    pathArt.strokeColor = makeColor(0,0,0);
    pathArt.strokeWidth = 0.0;
  }
  } catch (e) {
}
try {
  lines = doc.layers['2-CC::bardage'].pathItems;

  for (i = 0; i < lines.length; i++) {
    pathArt = lines[i];
    pathArt.strokeDashes = continuous;
    pathArt.strokeColor = makeColor(0,0,0);
    pathArt.strokeWidth = 0.0;
  }
  } catch (e) {
}
try {
  lines = doc.layers['3-SO'].pathItems;

  for (i = 0; i < lines.length; i++) {
    pathArt = lines[i];
    pathArt.strokeDashes = continuous;
    pathArt.strokeColor = makeColor(255,255,255);
    pathArt.strokeWidth = 0.0;
  }
  } catch (e) {
}
try {
  lines = doc.layers['3-SO::cloison'].pathItems;

  for (i = 0; i < lines.length; i++) {
    pathArt = lines[i];
    pathArt.strokeDashes = continuous;
    pathArt.strokeColor = makeColor(0,0,0);
    pathArt.strokeWidth = 0.0;
  }
  } catch (e) {
}
try {
  lines = doc.layers['3-SO::menuiserieInt'].pathItems;

  for (i = 0; i < lines.length; i++) {
    pathArt = lines[i];
    pathArt.strokeDashes = continuous;
    pathArt.strokeColor = makeColor(0,0,0);
    pathArt.strokeWidth = 0.0;
  }
  } catch (e) {
}
try {
  lines = doc.layers['3-SO::escalier'].pathItems;

  for (i = 0; i < lines.length; i++) {
    pathArt = lines[i];
    pathArt.strokeDashes = continuous;
    pathArt.strokeColor = makeColor(0,0,0);
    pathArt.strokeWidth = 0.0;
  }
  } catch (e) {
}
try {
  lines = doc.layers['3-SO::sanitaires'].pathItems;

  for (i = 0; i < lines.length; i++) {
    pathArt = lines[i];
    pathArt.strokeDashes = continuous;
    pathArt.strokeColor = makeColor(0,0,0);
    pathArt.strokeWidth = 0.0;
  }
  } catch (e) {
}
try {
  lines = doc.layers['3-SO::mobilier'].pathItems;

  for (i = 0; i < lines.length; i++) {
    pathArt = lines[i];
    pathArt.strokeDashes = continuous;
    pathArt.strokeColor = makeColor(0,0,0);
    pathArt.strokeWidth = 0.0;
  }
  } catch (e) {
}
try {
  lines = doc.layers['4-TECH'].pathItems;

  for (i = 0; i < lines.length; i++) {
    pathArt = lines[i];
    pathArt.strokeDashes = continuous;
    pathArt.strokeColor = makeColor(255,255,255);
    pathArt.strokeWidth = 0.0;
  }
  } catch (e) {
}
try {
  lines = doc.layers['4-TECH::ascenseur'].pathItems;

  for (i = 0; i < lines.length; i++) {
    pathArt = lines[i];
    pathArt.strokeDashes = continuous;
    pathArt.strokeColor = makeColor(0,0,0);
    pathArt.strokeWidth = 0.0;
  }
  } catch (e) {
}
try {
  lines = doc.layers['5-EXT'].pathItems;

  for (i = 0; i < lines.length; i++) {
    pathArt = lines[i];
    pathArt.strokeDashes = continuous;
    pathArt.strokeColor = makeColor(255,255,255);
    pathArt.strokeWidth = 0.0;
  }
  } catch (e) {
}
try {
  lines = doc.layers['5-EXT::arbres'].pathItems;

  for (i = 0; i < lines.length; i++) {
    pathArt = lines[i];
    pathArt.strokeDashes = continuous;
    pathArt.strokeColor = makeColor(0,0,0);
    pathArt.strokeWidth = 0.0;
  }
  } catch (e) {
}
try {
  lines = doc.layers['Make2D'].pathItems;

  for (i = 0; i < lines.length; i++) {
    pathArt = lines[i];
    pathArt.strokeDashes = continuous;
    pathArt.strokeColor = makeColor(255,255,255);
    pathArt.strokeWidth = 0.0;
  }
  } catch (e) {
}
try {
  lines = doc.layers['Make2D::visible'].pathItems;

  for (i = 0; i < lines.length; i++) {
    pathArt = lines[i];
    pathArt.strokeDashes = continuous;
    pathArt.strokeColor = makeColor(255,255,255);
    pathArt.strokeWidth = 0.0;
  }
  } catch (e) {
}
try {
  lines = doc.layers['Make2D::visible::curves'].pathItems;

  for (i = 0; i < lines.length; i++) {
    pathArt = lines[i];
    pathArt.strokeDashes = continuous;
    pathArt.strokeColor = makeColor(255,255,255);
    pathArt.strokeWidth = 0.0;
  }
  } catch (e) {
}
try {
  lines = doc.layers['Make2D::visible::curves::1-GO'].pathItems;

  for (i = 0; i < lines.length; i++) {
    pathArt = lines[i];
    pathArt.strokeDashes = continuous;
    pathArt.strokeColor = makeColor(255,255,255);
    pathArt.strokeWidth = 0.0;
  }
  } catch (e) {
}
try {
  lines = doc.layers['Make2D::visible::curves::1-GO::structMetal'].pathItems;

  for (i = 0; i < lines.length; i++) {
    pathArt = lines[i];
    pathArt.strokeDashes = continuous;
    pathArt.strokeColor = makeColor(0,0,0);
    pathArt.strokeWidth = 0.15;
  }
  } catch (e) {
}
try {
  lines = doc.layers['Make2D::visible::curves::1-GO::structBois'].pathItems;

  for (i = 0; i < lines.length; i++) {
    pathArt = lines[i];
    pathArt.strokeDashes = continuous;
    pathArt.strokeColor = makeColor(0,0,0);
    pathArt.strokeWidth = 0.25;
  }
  } catch (e) {
}
try {
  lines = doc.layers['Make2D::visible::curves::1-GO::structBeton'].pathItems;

  for (i = 0; i < lines.length; i++) {
    pathArt = lines[i];
    pathArt.strokeDashes = continuous;
    pathArt.strokeColor = makeColor(0,0,0);
    pathArt.strokeWidth = 0.25;
  }
  } catch (e) {
}
try {
  lines = doc.layers['Make2D::visible::curves::1-GO::maconnerie'].pathItems;

  for (i = 0; i < lines.length; i++) {
    pathArt = lines[i];
    pathArt.strokeDashes = continuous;
    pathArt.strokeColor = makeColor(0,0,0);
    pathArt.strokeWidth = 0.25;
  }
  } catch (e) {
}
try {
  lines = doc.layers['Make2D::visible::curves::1-GO::fondations'].pathItems;

  for (i = 0; i < lines.length; i++) {
    pathArt = lines[i];
    pathArt.strokeDashes = continuous;
    pathArt.strokeColor = makeColor(0,0,0);
    pathArt.strokeWidth = 0.25;
  }
  } catch (e) {
}
try {
  lines = doc.layers['Make2D::visible::curves::2-CC'].pathItems;

  for (i = 0; i < lines.length; i++) {
    pathArt = lines[i];
    pathArt.strokeDashes = continuous;
    pathArt.strokeColor = makeColor(255,255,255);
    pathArt.strokeWidth = 0.0;
  }
  } catch (e) {
}
try {
  lines = doc.layers['Make2D::visible::curves::2-CC::isolation'].pathItems;

  for (i = 0; i < lines.length; i++) {
    pathArt = lines[i];
    pathArt.strokeDashes = continuous;
    pathArt.strokeColor = makeColor(0,0,0);
    pathArt.strokeWidth = 0.15;
  }
  } catch (e) {
}
try {
  lines = doc.layers['Make2D::visible::curves::2-CC::couverture'].pathItems;

  for (i = 0; i < lines.length; i++) {
    pathArt = lines[i];
    pathArt.strokeDashes = continuous;
    pathArt.strokeColor = makeColor(0,0,0);
    pathArt.strokeWidth = 0.15;
  }
  } catch (e) {
}
try {
  lines = doc.layers['Make2D::visible::curves::2-CC::menuiserieExt'].pathItems;

  for (i = 0; i < lines.length; i++) {
    pathArt = lines[i];
    pathArt.strokeDashes = continuous;
    pathArt.strokeColor = makeColor(0,0,0);
    pathArt.strokeWidth = 0.15;
  }
  } catch (e) {
}
try {
  lines = doc.layers['Make2D::visible::curves::2-CC::vitrageExt'].pathItems;

  for (i = 0; i < lines.length; i++) {
    pathArt = lines[i];
    pathArt.strokeDashes = continuous;
    pathArt.strokeColor = makeColor(0,0,0);
    pathArt.strokeWidth = 0.15;
  }
  } catch (e) {
}
try {
  lines = doc.layers['Make2D::visible::curves::2-CC::bardage'].pathItems;

  for (i = 0; i < lines.length; i++) {
    pathArt = lines[i];
    pathArt.strokeDashes = continuous;
    pathArt.strokeColor = makeColor(0,0,0);
    pathArt.strokeWidth = 0.15;
  }
  } catch (e) {
}
try {
  lines = doc.layers['Make2D::visible::curves::3-SO'].pathItems;

  for (i = 0; i < lines.length; i++) {
    pathArt = lines[i];
    pathArt.strokeDashes = continuous;
    pathArt.strokeColor = makeColor(255,255,255);
    pathArt.strokeWidth = 0.0;
  }
  } catch (e) {
}
try {
  lines = doc.layers['Make2D::visible::curves::3-SO::cloison'].pathItems;

  for (i = 0; i < lines.length; i++) {
    pathArt = lines[i];
    pathArt.strokeDashes = continuous;
    pathArt.strokeColor = makeColor(0,0,0);
    pathArt.strokeWidth = 0.2;
  }
  } catch (e) {
}
try {
  lines = doc.layers['Make2D::visible::curves::3-SO::menuiserieInt'].pathItems;

  for (i = 0; i < lines.length; i++) {
    pathArt = lines[i];
    pathArt.strokeDashes = continuous;
    pathArt.strokeColor = makeColor(0,0,0);
    pathArt.strokeWidth = 0.15;
  }
  } catch (e) {
}
try {
  lines = doc.layers['Make2D::visible::curves::3-SO::escalier'].pathItems;

  for (i = 0; i < lines.length; i++) {
    pathArt = lines[i];
    pathArt.strokeDashes = continuous;
    pathArt.strokeColor = makeColor(0,0,0);
    pathArt.strokeWidth = 0.2;
  }
  } catch (e) {
}
try {
  lines = doc.layers['Make2D::visible::curves::3-SO::sanitaires'].pathItems;

  for (i = 0; i < lines.length; i++) {
    pathArt = lines[i];
    pathArt.strokeDashes = continuous;
    pathArt.strokeColor = makeColor(0,0,0);
    pathArt.strokeWidth = 0.15;
  }
  } catch (e) {
}
try {
  lines = doc.layers['Make2D::visible::curves::3-SO::mobilier'].pathItems;

  for (i = 0; i < lines.length; i++) {
    pathArt = lines[i];
    pathArt.strokeDashes = continuous;
    pathArt.strokeColor = makeColor(0,0,0);
    pathArt.strokeWidth = 0.25;
  }
  } catch (e) {
}
try {
  lines = doc.layers['Make2D::visible::curves::4-TECH'].pathItems;

  for (i = 0; i < lines.length; i++) {
    pathArt = lines[i];
    pathArt.strokeDashes = continuous;
    pathArt.strokeColor = makeColor(255,255,255);
    pathArt.strokeWidth = 0.0;
  }
  } catch (e) {
}
try {
  lines = doc.layers['Make2D::visible::curves::4-TECH::ascenseur'].pathItems;

  for (i = 0; i < lines.length; i++) {
    pathArt = lines[i];
    pathArt.strokeDashes = continuous;
    pathArt.strokeColor = makeColor(0,0,0);
    pathArt.strokeWidth = 0.25;
  }
  } catch (e) {
}
try {
  lines = doc.layers['Make2D::visible::curves::5-EXT'].pathItems;

  for (i = 0; i < lines.length; i++) {
    pathArt = lines[i];
    pathArt.strokeDashes = continuous;
    pathArt.strokeColor = makeColor(255,255,255);
    pathArt.strokeWidth = 0.0;
  }
  } catch (e) {
}
try {
  lines = doc.layers['Make2D::visible::curves::5-EXT::arbres'].pathItems;

  for (i = 0; i < lines.length; i++) {
    pathArt = lines[i];
    pathArt.strokeDashes = continuous;
    pathArt.strokeColor = makeColor(0,0,0);
    pathArt.strokeWidth = 0.15;
  }
  } catch (e) {
}
try {
  lines = doc.layers['Make2D::visible::clippingplaneintersections'].pathItems;

  for (i = 0; i < lines.length; i++) {
    pathArt = lines[i];
    pathArt.strokeDashes = continuous;
    pathArt.strokeColor = makeColor(255,255,255);
    pathArt.strokeWidth = 0.0;
  }
  } catch (e) {
}
try {
  lines = doc.layers['Make2D::visible::clippingplaneintersections::1-GO'].pathItems;

  for (i = 0; i < lines.length; i++) {
    pathArt = lines[i];
    pathArt.strokeDashes = continuous;
    pathArt.strokeColor = makeColor(255,255,255);
    pathArt.strokeWidth = 0.0;
  }
  } catch (e) {
}
try {
  lines = doc.layers['Make2D::visible::clippingplaneintersections::1-GO::structMetal'].pathItems;

  for (i = 0; i < lines.length; i++) {
    pathArt = lines[i];
    pathArt.strokeDashes = continuous;
    pathArt.strokeColor = makeColor(0,0,0);
    pathArt.strokeWidth = 0.25;
    pathArt.filled = true;
    pathArt.fillColor = doc.swatches['Black'].color;  }
  } catch (e) {
}
try {
  lines = doc.layers['Make2D::visible::clippingplaneintersections::1-GO::structBois'].pathItems;

  for (i = 0; i < lines.length; i++) {
    pathArt = lines[i];
    pathArt.strokeDashes = continuous;
    pathArt.strokeColor = makeColor(0,0,0);
    pathArt.strokeWidth = 0.25;
    pathArt.filled = true;
    pathArt.fillColor = doc.swatches['Black'].color;  }
  } catch (e) {
}
try {
  lines = doc.layers['Make2D::visible::clippingplaneintersections::1-GO::structBeton'].pathItems;

  for (i = 0; i < lines.length; i++) {
    pathArt = lines[i];
    pathArt.strokeDashes = continuous;
    pathArt.strokeColor = makeColor(0,0,0);
    pathArt.strokeWidth = 0.25;
    pathArt.filled = true;
    pathArt.fillColor = doc.swatches['Black'].color;  }
  } catch (e) {
}
try {
  lines = doc.layers['Make2D::visible::clippingplaneintersections::1-GO::maconnerie'].pathItems;

  for (i = 0; i < lines.length; i++) {
    pathArt = lines[i];
    pathArt.strokeDashes = continuous;
    pathArt.strokeColor = makeColor(0,0,0);
    pathArt.strokeWidth = 0.25;
    pathArt.filled = true;
    pathArt.fillColor = doc.swatches['Black'].color;  }
  } catch (e) {
}
try {
  lines = doc.layers['Make2D::visible::clippingplaneintersections::1-GO::fondations'].pathItems;

  for (i = 0; i < lines.length; i++) {
    pathArt = lines[i];
    pathArt.strokeDashes = continuous;
    pathArt.strokeColor = makeColor(0,0,0);
    pathArt.strokeWidth = 0.25;
    pathArt.filled = true;
    pathArt.fillColor = doc.swatches['Black'].color;  }
  } catch (e) {
}
try {
  lines = doc.layers['Make2D::visible::clippingplaneintersections::2-CC'].pathItems;

  for (i = 0; i < lines.length; i++) {
    pathArt = lines[i];
    pathArt.strokeDashes = continuous;
    pathArt.strokeColor = makeColor(255,255,255);
    pathArt.strokeWidth = 0.0;
  }
  } catch (e) {
}
try {
  lines = doc.layers['Make2D::visible::clippingplaneintersections::2-CC::isolation'].pathItems;

  for (i = 0; i < lines.length; i++) {
    pathArt = lines[i];
    pathArt.strokeDashes = continuous;
    pathArt.strokeColor = makeColor(0,0,0);
    pathArt.strokeWidth = 0.15;
  }
  } catch (e) {
}
try {
  lines = doc.layers['Make2D::visible::clippingplaneintersections::2-CC::couverture'].pathItems;

  for (i = 0; i < lines.length; i++) {
    pathArt = lines[i];
    pathArt.strokeDashes = continuous;
    pathArt.strokeColor = makeColor(0,0,0);
    pathArt.strokeWidth = 0.25;
  }
  } catch (e) {
}
try {
  lines = doc.layers['Make2D::visible::clippingplaneintersections::2-CC::menuiserieExt'].pathItems;

  for (i = 0; i < lines.length; i++) {
    pathArt = lines[i];
    pathArt.strokeDashes = continuous;
    pathArt.strokeColor = makeColor(0,0,0);
    pathArt.strokeWidth = 0.25;
  }
  } catch (e) {
}
try {
  lines = doc.layers['Make2D::visible::clippingplaneintersections::2-CC::vitrageExt'].pathItems;

  for (i = 0; i < lines.length; i++) {
    pathArt = lines[i];
    pathArt.strokeDashes = continuous;
    pathArt.strokeColor = makeColor(0,0,0);
    pathArt.strokeWidth = 0.4;
  }
  } catch (e) {
}
try {
  lines = doc.layers['Make2D::visible::clippingplaneintersections::2-CC::bardage'].pathItems;

  for (i = 0; i < lines.length; i++) {
    pathArt = lines[i];
    pathArt.strokeDashes = continuous;
    pathArt.strokeColor = makeColor(0,0,0);
    pathArt.strokeWidth = 0.25;
  }
  } catch (e) {
}
try {
  lines = doc.layers['Make2D::visible::clippingplaneintersections::3-SO'].pathItems;

  for (i = 0; i < lines.length; i++) {
    pathArt = lines[i];
    pathArt.strokeDashes = continuous;
    pathArt.strokeColor = makeColor(255,255,255);
    pathArt.strokeWidth = 0.0;
  }
  } catch (e) {
}
try {
  lines = doc.layers['Make2D::visible::clippingplaneintersections::3-SO::cloison'].pathItems;

  for (i = 0; i < lines.length; i++) {
    pathArt = lines[i];
    pathArt.strokeDashes = continuous;
    pathArt.strokeColor = makeColor(0,0,0);
    pathArt.strokeWidth = 0.25;
  }
  } catch (e) {
}
try {
  lines = doc.layers['Make2D::visible::clippingplaneintersections::3-SO::menuiserieInt'].pathItems;

  for (i = 0; i < lines.length; i++) {
    pathArt = lines[i];
    pathArt.strokeDashes = continuous;
    pathArt.strokeColor = makeColor(0,0,0);
    pathArt.strokeWidth = 0.25;
  }
  } catch (e) {
}
try {
  lines = doc.layers['Make2D::visible::clippingplaneintersections::3-SO::escalier'].pathItems;

  for (i = 0; i < lines.length; i++) {
    pathArt = lines[i];
    pathArt.strokeDashes = continuous;
    pathArt.strokeColor = makeColor(0,0,0);
    pathArt.strokeWidth = 0.3;
  }
  } catch (e) {
}
try {
  lines = doc.layers['Make2D::visible::clippingplaneintersections::3-SO::sanitaires'].pathItems;

  for (i = 0; i < lines.length; i++) {
    pathArt = lines[i];
    pathArt.strokeDashes = continuous;
    pathArt.strokeColor = makeColor(0,0,0);
    pathArt.strokeWidth = 0.25;
  }
  } catch (e) {
}
try {
  lines = doc.layers['Make2D::visible::clippingplaneintersections::3-SO::mobilier'].pathItems;

  for (i = 0; i < lines.length; i++) {
    pathArt = lines[i];
    pathArt.strokeDashes = continuous;
    pathArt.strokeColor = makeColor(0,0,0);
    pathArt.strokeWidth = 0.3;
  }
  } catch (e) {
}
try {
  lines = doc.layers['Make2D::visible::clippingplaneintersections::4-TECH'].pathItems;

  for (i = 0; i < lines.length; i++) {
    pathArt = lines[i];
    pathArt.strokeDashes = continuous;
    pathArt.strokeColor = makeColor(255,255,255);
    pathArt.strokeWidth = 0.0;
  }
  } catch (e) {
}
try {
  lines = doc.layers['Make2D::visible::clippingplaneintersections::4-TECH::ascenseur'].pathItems;

  for (i = 0; i < lines.length; i++) {
    pathArt = lines[i];
    pathArt.strokeDashes = continuous;
    pathArt.strokeColor = makeColor(0,0,0);
    pathArt.strokeWidth = 0.3;
  }
  } catch (e) {
}
try {
  lines = doc.layers['Make2D::visible::clippingplaneintersections::5-EXT'].pathItems;

  for (i = 0; i < lines.length; i++) {
    pathArt = lines[i];
    pathArt.strokeDashes = continuous;
    pathArt.strokeColor = makeColor(255,255,255);
    pathArt.strokeWidth = 0.0;
  }
  } catch (e) {
}
try {
  lines = doc.layers['Make2D::visible::clippingplaneintersections::5-EXT::arbres'].pathItems;

  for (i = 0; i < lines.length; i++) {
    pathArt = lines[i];
    pathArt.strokeDashes = continuous;
    pathArt.strokeColor = makeColor(0,0,0);
    pathArt.strokeWidth = 0.3;
  }
  } catch (e) {
}
try {
  lines = doc.layers['Make2D::hidden'].pathItems;

  for (i = 0; i < lines.length; i++) {
    pathArt = lines[i];
    pathArt.strokeDashes = dots;
    pathArt.strokeColor = makeColor(255,255,255);
    pathArt.strokeWidth = 0.0;
  }
  } catch (e) {
}
try {
  lines = doc.layers['Make2D::hidden::curves'].pathItems;

  for (i = 0; i < lines.length; i++) {
    pathArt = lines[i];
    pathArt.strokeDashes = dots;
    pathArt.strokeColor = makeColor(255,255,255);
    pathArt.strokeWidth = 0.0;
  }
  } catch (e) {
}
try {
  lines = doc.layers['Make2D::hidden::curves::1-GO'].pathItems;

  for (i = 0; i < lines.length; i++) {
    pathArt = lines[i];
    pathArt.strokeDashes = dots;
    pathArt.strokeColor = makeColor(255,255,255);
    pathArt.strokeWidth = 0.0;
  }
  } catch (e) {
}
try {
  lines = doc.layers['Make2D::hidden::curves::1-GO::structMetal'].pathItems;

  for (i = 0; i < lines.length; i++) {
    pathArt = lines[i];
    pathArt.strokeDashes = dots;
    pathArt.strokeColor = makeColor(0,0,0);
    pathArt.strokeWidth = 0.25;
  }
  } catch (e) {
}
try {
  lines = doc.layers['Make2D::hidden::curves::1-GO::structBois'].pathItems;

  for (i = 0; i < lines.length; i++) {
    pathArt = lines[i];
    pathArt.strokeDashes = dots;
    pathArt.strokeColor = makeColor(0,0,0);
    pathArt.strokeWidth = 0.4;
  }
  } catch (e) {
}
try {
  lines = doc.layers['Make2D::hidden::curves::1-GO::structBeton'].pathItems;

  for (i = 0; i < lines.length; i++) {
    pathArt = lines[i];
    pathArt.strokeDashes = dots;
    pathArt.strokeColor = makeColor(0,0,0);
    pathArt.strokeWidth = 0.4;
  }
  } catch (e) {
}
try {
  lines = doc.layers['Make2D::hidden::curves::1-GO::maconnerie'].pathItems;

  for (i = 0; i < lines.length; i++) {
    pathArt = lines[i];
    pathArt.strokeDashes = dots;
    pathArt.strokeColor = makeColor(0,0,0);
    pathArt.strokeWidth = 0.4;
  }
  } catch (e) {
}
try {
  lines = doc.layers['Make2D::hidden::curves::1-GO::fondations'].pathItems;

  for (i = 0; i < lines.length; i++) {
    pathArt = lines[i];
    pathArt.strokeDashes = dots;
    pathArt.strokeColor = makeColor(0,0,0);
    pathArt.strokeWidth = 0.4;
  }
  } catch (e) {
}
try {
  lines = doc.layers['Make2D::hidden::curves::2-CC'].pathItems;

  for (i = 0; i < lines.length; i++) {
    pathArt = lines[i];
    pathArt.strokeDashes = dots;
    pathArt.strokeColor = makeColor(255,255,255);
    pathArt.strokeWidth = 0.0;
  }
  } catch (e) {
}
try {
  lines = doc.layers['Make2D::hidden::curves::2-CC::isolation'].pathItems;

  for (i = 0; i < lines.length; i++) {
    pathArt = lines[i];
    pathArt.strokeDashes = dots;
    pathArt.strokeColor = makeColor(0,0,0);
    pathArt.strokeWidth = 0.2;
  }
  } catch (e) {
}
try {
  lines = doc.layers['Make2D::hidden::curves::2-CC::couverture'].pathItems;

  for (i = 0; i < lines.length; i++) {
    pathArt = lines[i];
    pathArt.strokeDashes = dots;
    pathArt.strokeColor = makeColor(0,0,0);
    pathArt.strokeWidth = 0.3;
  }
  } catch (e) {
}
try {
  lines = doc.layers['Make2D::hidden::curves::2-CC::menuiserieExt'].pathItems;

  for (i = 0; i < lines.length; i++) {
    pathArt = lines[i];
    pathArt.strokeDashes = dots;
    pathArt.strokeColor = makeColor(0,0,0);
    pathArt.strokeWidth = 0.3;
  }
  } catch (e) {
}
try {
  lines = doc.layers['Make2D::hidden::curves::2-CC::vitrageExt'].pathItems;

  for (i = 0; i < lines.length; i++) {
    pathArt = lines[i];
    pathArt.strokeDashes = dots;
    pathArt.strokeColor = makeColor(0,0,0);
    pathArt.strokeWidth = 0.3;
  }
  } catch (e) {
}
try {
  lines = doc.layers['Make2D::hidden::curves::2-CC::bardage'].pathItems;

  for (i = 0; i < lines.length; i++) {
    pathArt = lines[i];
    pathArt.strokeDashes = dots;
    pathArt.strokeColor = makeColor(0,0,0);
    pathArt.strokeWidth = 0.3;
  }
  } catch (e) {
}
try {
  lines = doc.layers['Make2D::hidden::curves::3-SO'].pathItems;

  for (i = 0; i < lines.length; i++) {
    pathArt = lines[i];
    pathArt.strokeDashes = dots;
    pathArt.strokeColor = makeColor(255,255,255);
    pathArt.strokeWidth = 0.0;
  }
  } catch (e) {
}
try {
  lines = doc.layers['Make2D::hidden::curves::3-SO::cloison'].pathItems;

  for (i = 0; i < lines.length; i++) {
    pathArt = lines[i];
    pathArt.strokeDashes = dots;
    pathArt.strokeColor = makeColor(0,0,0);
    pathArt.strokeWidth = 0.3;
  }
  } catch (e) {
}
try {
  lines = doc.layers['Make2D::hidden::curves::3-SO::menuiserieInt'].pathItems;

  for (i = 0; i < lines.length; i++) {
    pathArt = lines[i];
    pathArt.strokeDashes = dots;
    pathArt.strokeColor = makeColor(0,0,0);
    pathArt.strokeWidth = 0.25;
  }
  } catch (e) {
}
try {
  lines = doc.layers['Make2D::hidden::curves::3-SO::escalier'].pathItems;

  for (i = 0; i < lines.length; i++) {
    pathArt = lines[i];
    pathArt.strokeDashes = dots;
    pathArt.strokeColor = makeColor(0,0,0);
    pathArt.strokeWidth = 0.3;
  }
  } catch (e) {
}
try {
  lines = doc.layers['Make2D::hidden::curves::3-SO::sanitaires'].pathItems;

  for (i = 0; i < lines.length; i++) {
    pathArt = lines[i];
    pathArt.strokeDashes = dots;
    pathArt.strokeColor = makeColor(0,0,0);
    pathArt.strokeWidth = 0.2;
  }
  } catch (e) {
}
try {
  lines = doc.layers['Make2D::hidden::curves::3-SO::mobilier'].pathItems;

  for (i = 0; i < lines.length; i++) {
    pathArt = lines[i];
    pathArt.strokeDashes = dots;
    pathArt.strokeColor = makeColor(0,0,0);
    pathArt.strokeWidth = 0.25;
  }
  } catch (e) {
}
try {
  lines = doc.layers['Make2D::hidden::curves::4-TECH'].pathItems;

  for (i = 0; i < lines.length; i++) {
    pathArt = lines[i];
    pathArt.strokeDashes = dots;
    pathArt.strokeColor = makeColor(255,255,255);
    pathArt.strokeWidth = 0.0;
  }
  } catch (e) {
}
try {
  lines = doc.layers['Make2D::hidden::curves::4-TECH::ascenseur'].pathItems;

  for (i = 0; i < lines.length; i++) {
    pathArt = lines[i];
    pathArt.strokeDashes = dots;
    pathArt.strokeColor = makeColor(0,0,0);
    pathArt.strokeWidth = 0.3;
  }
  } catch (e) {
}
try {
  lines = doc.layers['Make2D::hidden::curves::5-EXT'].pathItems;

  for (i = 0; i < lines.length; i++) {
    pathArt = lines[i];
    pathArt.strokeDashes = dots;
    pathArt.strokeColor = makeColor(255,255,255);
    pathArt.strokeWidth = 0.0;
  }
  } catch (e) {
}
try {
  lines = doc.layers['Make2D::hidden::curves::5-EXT::arbres'].pathItems;

  for (i = 0; i < lines.length; i++) {
    pathArt = lines[i];
    pathArt.strokeDashes = dots;
    pathArt.strokeColor = makeColor(0,0,0);
    pathArt.strokeWidth = 0.2;
  }
  } catch (e) {
}
try {
  lines = doc.layers['Make2D::projected'].pathItems;

  for (i = 0; i < lines.length; i++) {
    pathArt = lines[i];
    pathArt.strokeDashes = dashed;
    pathArt.strokeColor = makeColor(255,255,255);
    pathArt.strokeWidth = 0.0;
  }
  } catch (e) {
}
try {
  lines = doc.layers['Make2D::projected::curves'].pathItems;

  for (i = 0; i < lines.length; i++) {
    pathArt = lines[i];
    pathArt.strokeDashes = dashed;
    pathArt.strokeColor = makeColor(255,255,255);
    pathArt.strokeWidth = 0.0;
  }
  } catch (e) {
}
try {
  lines = doc.layers['Make2D::projected::curves::1-GO'].pathItems;

  for (i = 0; i < lines.length; i++) {
    pathArt = lines[i];
    pathArt.strokeDashes = dashed;
    pathArt.strokeColor = makeColor(255,255,255);
    pathArt.strokeWidth = 0.0;
  }
  } catch (e) {
}
try {
  lines = doc.layers['Make2D::projected::curves::structMetal'].pathItems;

  for (i = 0; i < lines.length; i++) {
    pathArt = lines[i];
    pathArt.strokeDashes = dashed;
    pathArt.strokeColor = makeColor(0,0,0);
    pathArt.strokeWidth = 0.15;
  }
  } catch (e) {
}
try {
  lines = doc.layers['Make2D::projected::curves::structBois'].pathItems;

  for (i = 0; i < lines.length; i++) {
    pathArt = lines[i];
    pathArt.strokeDashes = dashed;
    pathArt.strokeColor = makeColor(0,0,0);
    pathArt.strokeWidth = 0.25;
  }
  } catch (e) {
}
try {
  lines = doc.layers['Make2D::projected::curves::structBeton'].pathItems;

  for (i = 0; i < lines.length; i++) {
    pathArt = lines[i];
    pathArt.strokeDashes = dashed;
    pathArt.strokeColor = makeColor(0,0,0);
    pathArt.strokeWidth = 0.25;
  }
  } catch (e) {
}
try {
  lines = doc.layers['Make2D::projected::curves::maconnerie'].pathItems;

  for (i = 0; i < lines.length; i++) {
    pathArt = lines[i];
    pathArt.strokeDashes = dashed;
    pathArt.strokeColor = makeColor(0,0,0);
    pathArt.strokeWidth = 0.25;
  }
  } catch (e) {
}
try {
  lines = doc.layers['Make2D::projected::curves::fondations'].pathItems;

  for (i = 0; i < lines.length; i++) {
    pathArt = lines[i];
    pathArt.strokeDashes = dashed;
    pathArt.strokeColor = makeColor(0,0,0);
    pathArt.strokeWidth = 0.25;
  }
  } catch (e) {
}
try {
  lines = doc.layers['Make2D::projected::curves::2-CC'].pathItems;

  for (i = 0; i < lines.length; i++) {
    pathArt = lines[i];
    pathArt.strokeDashes = dashed;
    pathArt.strokeColor = makeColor(255,255,255);
    pathArt.strokeWidth = 0.0;
  }
  } catch (e) {
}
try {
  lines = doc.layers['Make2D::projected::curves::isolation'].pathItems;

  for (i = 0; i < lines.length; i++) {
    pathArt = lines[i];
    pathArt.strokeDashes = dashed;
    pathArt.strokeColor = makeColor(0,0,0);
    pathArt.strokeWidth = 0.15;
  }
  } catch (e) {
}
try {
  lines = doc.layers['Make2D::projected::curves::couverture'].pathItems;

  for (i = 0; i < lines.length; i++) {
    pathArt = lines[i];
    pathArt.strokeDashes = dashed;
    pathArt.strokeColor = makeColor(0,0,0);
    pathArt.strokeWidth = 0.15;
  }
  } catch (e) {
}
try {
  lines = doc.layers['Make2D::projected::curves::menuiserieExt'].pathItems;

  for (i = 0; i < lines.length; i++) {
    pathArt = lines[i];
    pathArt.strokeDashes = dashed;
    pathArt.strokeColor = makeColor(0,0,0);
    pathArt.strokeWidth = 0.15;
  }
  } catch (e) {
}
try {
  lines = doc.layers['Make2D::projected::curves::vitrageExt'].pathItems;

  for (i = 0; i < lines.length; i++) {
    pathArt = lines[i];
    pathArt.strokeDashes = dashed;
    pathArt.strokeColor = makeColor(0,0,0);
    pathArt.strokeWidth = 0.15;
  }
  } catch (e) {
}
try {
  lines = doc.layers['Make2D::projected::curves::bardage'].pathItems;

  for (i = 0; i < lines.length; i++) {
    pathArt = lines[i];
    pathArt.strokeDashes = dashed;
    pathArt.strokeColor = makeColor(0,0,0);
    pathArt.strokeWidth = 0.15;
  }
  } catch (e) {
}
try {
  lines = doc.layers['Make2D::projected::curves::3-SO'].pathItems;

  for (i = 0; i < lines.length; i++) {
    pathArt = lines[i];
    pathArt.strokeDashes = dashed;
    pathArt.strokeColor = makeColor(255,255,255);
    pathArt.strokeWidth = 0.0;
  }
  } catch (e) {
}
try {
  lines = doc.layers['Make2D::projected::curves::cloison'].pathItems;

  for (i = 0; i < lines.length; i++) {
    pathArt = lines[i];
    pathArt.strokeDashes = dashed;
    pathArt.strokeColor = makeColor(0,0,0);
    pathArt.strokeWidth = 0.2;
  }
  } catch (e) {
}
try {
  lines = doc.layers['Make2D::projected::curves::menuiserieInt'].pathItems;

  for (i = 0; i < lines.length; i++) {
    pathArt = lines[i];
    pathArt.strokeDashes = dashed;
    pathArt.strokeColor = makeColor(0,0,0);
    pathArt.strokeWidth = 0.15;
  }
  } catch (e) {
}
try {
  lines = doc.layers['Make2D::projected::curves::escalier'].pathItems;

  for (i = 0; i < lines.length; i++) {
    pathArt = lines[i];
    pathArt.strokeDashes = dashed;
    pathArt.strokeColor = makeColor(0,0,0);
    pathArt.strokeWidth = 0.2;
  }
  } catch (e) {
}
try {
  lines = doc.layers['Make2D::projected::curves::sanitaires'].pathItems;

  for (i = 0; i < lines.length; i++) {
    pathArt = lines[i];
    pathArt.strokeDashes = dashed;
    pathArt.strokeColor = makeColor(0,0,0);
    pathArt.strokeWidth = 0.15;
  }
  } catch (e) {
}
try {
  lines = doc.layers['Make2D::projected::curves::mobilier'].pathItems;

  for (i = 0; i < lines.length; i++) {
    pathArt = lines[i];
    pathArt.strokeDashes = dashed;
    pathArt.strokeColor = makeColor(0,0,0);
    pathArt.strokeWidth = 0.25;
  }
  } catch (e) {
}
try {
  lines = doc.layers['Make2D::projected::curves::4-TECH'].pathItems;

  for (i = 0; i < lines.length; i++) {
    pathArt = lines[i];
    pathArt.strokeDashes = dashed;
    pathArt.strokeColor = makeColor(255,255,255);
    pathArt.strokeWidth = 0.0;
  }
  } catch (e) {
}
try {
  lines = doc.layers['Make2D::projected::curves::ascenseur'].pathItems;

  for (i = 0; i < lines.length; i++) {
    pathArt = lines[i];
    pathArt.strokeDashes = dashed;
    pathArt.strokeColor = makeColor(0,0,0);
    pathArt.strokeWidth = 0.25;
  }
  } catch (e) {
}
try {
  lines = doc.layers['Make2D::projected::curves::5-EXT'].pathItems;

  for (i = 0; i < lines.length; i++) {
    pathArt = lines[i];
    pathArt.strokeDashes = dashed;
    pathArt.strokeColor = makeColor(255,255,255);
    pathArt.strokeWidth = 0.0;
  }
  } catch (e) {
}
try {
  lines = doc.layers['Make2D::projected::curves::5-EXT::arbres'].pathItems;

  for (i = 0; i < lines.length; i++) {
    pathArt = lines[i];
    pathArt.strokeDashes = dashed;
    pathArt.strokeColor = makeColor(0,0,0);
    pathArt.strokeWidth = 0.15;
  }
  } catch (e) {
}