var sketch = {
  "metadata": {
    "width": 1253,
    "height": 699,
    "wsp-version": "4.8.0",
    "wsp-build-number": "1070",
    "wsp-build-stamp": "8126303e6615/20200924134425",
    "exporter-version": "6.00A3007(dev)",
    "exporter-build": "3007(dev)",
    "original-document-name": "L13 Exponent Explorer Student.gsp",
    "start-page": "1",
    "authorPreferences": {
      "stylewidget": "none",
      "tracewidget": "none",
      "labelwidget": "none",
      "visibilitywidget": "none",
      "deletewidget": "none",
      "resetbutton": "none",
      "uploadutil": false,
      "downloadutil": false,
      "disablescrolling": false,
      "removeinaccessibleobjects": false
    }
  },
  "resources": {
    "fontList": [
      "\"Arial\", sans-serif",
      "\"Comic Sans MS\", sans-serif"
    ]
  },
  "pages": [
    {
      "metadata": {
        "title": "1",
        "id": "1",
        "sketchRect": {
          "top": -67,
          "left": -112,
          "bottom": 632,
          "right": 1141
        }
      },
      "preferences": {
        "units": {
          "length": "cm",
          "angle": "deg"
        },
        "precision": {
          "length": 2,
          "angle": 2,
          "scalar": 2
        },
        "colorableComponents": {
          "Points": {
            "color": "rgb(253,128,8)"
          },
          "Straights": {
            "color": "rgb(252,1,7)"
          },
          "Curves": {
            "color": "white"
          },
          "Interior": {
            "color": "rgb(217,185,152)"
          },
          "Plot": {
            "color": "rgb(0,125,0)"
          },
          "PointLocus": {
            "color": "rgb(121,0,0)"
          },
          "Selection": {
            "color": "rgb(204,204,204)"
          },
          "Background": {
            "color": "rgb(248,248,248)"
          },
          "TextGObject_BackgroundContrast": {
            "color": "rgb(33,255,6)"
          },
          "ActionButton": {
            "color": "rgb(153,153,153)"
          },
          "Axis": {
            "color": "rgb(179,179,179)"
          }
        },
        "text": {
          "mathItalicization": true,
          "textTypes": {
            "Label": {
              "font-family": "\"Arial\", sans-serif",
              "font-size": 20,
              "color": "red"
            },
            "Caption": {
              "font-family": "\"Comic Sans MS\", sans-serif",
              "font-size": 20,
              "color": "red"
            },
            "Measurement": {
              "font-family": "\"Comic Sans MS\", sans-serif",
              "font-size": 12,
              "color": "green"
            },
            "Action": {
              "label": {
                "font-family": "\"Comic Sans MS\", sans-serif",
                "font-size": 10
              }
            },
            "Table": {
              "font-family": "\"Comic Sans MS\", sans-serif",
              "font-size": 18
            },
            "AxisTicksAndOptionalLabel": {
              "font-family": "\"Arial\", sans-serif",
              "font-size": 30
            }
          }
        }
      },
      "objects": {
        "1": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 3,
              "y": 90
            }
          },
          "textMFS": "<VL<H<+<SP1#28R1G1L100<T'x'>><SP1#28R1G81L1<T'm'>>><T' '><SP1#18<T'versus'>><SP1<T' '>><SP1R100G1L1<T'y'>><SP1#28R1G81L1<+<0><T'm'>>>>>",
          "style": {
            "font-family": 0,
            "font-size": 36,
            "color": "black"
          }
        },
        "2": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 402,
              "y": -28
            }
          },
          "textMFS": "<VL<T'Exponent Exploxer'>>",
          "style": {
            "font-size": 30,
            "font-weight": "bold",
            "color": "black"
          }
        },
        "3": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 912,
              "y": 77
            }
          },
          "style": {
            "hidden": true,
            "color": "green"
          }
        },
        "4": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": -733,
              "y": 35
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1.2 cm",
          "label": "dis",
          "style": {
            "hidden": true,
            "font-size": 11,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "5": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "3",
            "distance": "4"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "green"
          }
        },
        "6": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": -733,
              "y": 60
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "19",
          "label": "dis #",
          "style": {
            "hidden": true,
            "font-size": 11,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "7": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "4",
            "1": "6"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": -733,
              "y": 85
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1",
          "label": "m[15]",
          "style": {
            "hidden": true,
            "font-size": 11,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "8": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "5",
            "p1": "3"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "color": "green",
            "width": 1
          }
        },
        "9": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "path": "8"
          },
          "constraint": "MeasurementLength",
          "geom": {
            "loc": {
              "x": 411,
              "y": 691
            }
          },
          "style": {
            "hidden": true,
            "font-size": 14,
            "color": "black",
            "precision": 1,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "10": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": -733,
              "y": 104
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "0.6000000000000001 cm",
          "label": "size",
          "style": {
            "hidden": true,
            "font-size": 11,
            "precision": 1,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "11": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "10"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": -733,
              "y": 129
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*2",
          "style": {
            "hidden": true,
            "font-size": 11,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "12": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": -733,
              "y": 148
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1 cm",
          "label": "t[9]",
          "style": {
            "hidden": true,
            "font-size": 11,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "13": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 305.3464566929134,
              "y": 548
            }
          },
          "style": {
            "hidden": true,
            "color": "rgb(0,0,252)"
          }
        },
        "14": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": -611,
              "y": 29
            }
          },
          "textMFS": "<T'-8'>",
          "style": {
            "hidden": true,
            "font-size": 11,
            "color": "green"
          }
        },
        "15": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": -611,
              "y": 50
            }
          },
          "textMFS": "<T'-7'>",
          "style": {
            "hidden": true,
            "font-size": 11,
            "color": "green"
          }
        },
        "16": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": -611,
              "y": 71
            }
          },
          "textMFS": "<T'-6'>",
          "style": {
            "hidden": true,
            "font-size": 11,
            "color": "green"
          }
        },
        "17": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": -611,
              "y": 92
            }
          },
          "textMFS": "<T'-5'>",
          "style": {
            "hidden": true,
            "font-size": 11,
            "color": "green"
          }
        },
        "18": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": -611,
              "y": 113
            }
          },
          "textMFS": "<T'-4'>",
          "style": {
            "hidden": true,
            "font-size": 11,
            "color": "green"
          }
        },
        "19": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": -611,
              "y": 134
            }
          },
          "textMFS": "<T'-3'>",
          "style": {
            "hidden": true,
            "font-size": 11,
            "color": "green"
          }
        },
        "20": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": -611,
              "y": 155
            }
          },
          "textMFS": "<T'-2'>",
          "style": {
            "hidden": true,
            "font-size": 11,
            "color": "green"
          }
        },
        "21": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": -611,
              "y": 176
            }
          },
          "textMFS": "<T'-1'>",
          "style": {
            "hidden": true,
            "font-size": 11,
            "color": "green"
          }
        },
        "22": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": -587,
              "y": 10
            }
          },
          "textMFS": "<T'0'>",
          "style": {
            "hidden": true,
            "font-size": 11,
            "color": "green"
          }
        },
        "23": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": -587,
              "y": 52
            }
          },
          "textMFS": "<T'2'>",
          "style": {
            "hidden": true,
            "font-size": 11,
            "color": "green"
          }
        },
        "24": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": -587,
              "y": 73
            }
          },
          "textMFS": "<T'3'>",
          "style": {
            "hidden": true,
            "font-size": 11,
            "color": "green"
          }
        },
        "25": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": -587,
              "y": 94
            }
          },
          "textMFS": "<T'4'>",
          "style": {
            "hidden": true,
            "font-size": 11,
            "color": "green"
          }
        },
        "26": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": -587,
              "y": 115
            }
          },
          "textMFS": "<T'5'>",
          "style": {
            "hidden": true,
            "font-size": 11,
            "color": "green"
          }
        },
        "27": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": -587,
              "y": 31
            }
          },
          "textMFS": "<T'1'>",
          "style": {
            "hidden": true,
            "font-size": 11,
            "color": "green"
          }
        },
        "28": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": -587,
              "y": 136
            }
          },
          "textMFS": "<T'6'>",
          "style": {
            "hidden": true,
            "font-size": 11,
            "color": "green"
          }
        },
        "29": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": -587,
              "y": 157
            }
          },
          "textMFS": "<T'7'>",
          "style": {
            "hidden": true,
            "font-size": 11,
            "color": "green"
          }
        },
        "30": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": -587,
              "y": 178
            }
          },
          "textMFS": "<T'8'>",
          "style": {
            "hidden": true,
            "font-size": 11,
            "color": "green"
          }
        },
        "31": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": -587,
              "y": 199
            }
          },
          "textMFS": "<T'9'>",
          "style": {
            "hidden": true,
            "font-size": 11,
            "color": "green"
          }
        },
        "32": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": -728,
              "y": 262
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1.2 cm",
          "label": "dis",
          "style": {
            "hidden": true,
            "font-size": 11,
            "color": "red",
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "33": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": -728,
              "y": 287
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "19",
          "label": "dis #",
          "style": {
            "hidden": true,
            "font-size": 11,
            "color": "red",
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "34": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": -728,
              "y": 311
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "0.6000000000000001 cm",
          "label": "size",
          "style": {
            "hidden": true,
            "font-size": 11,
            "color": "red",
            "precision": 1,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "35": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": -631,
              "y": 261
            }
          },
          "textMFS": "<VL<T'-0.9'>>",
          "style": {
            "hidden": true,
            "font-size": 11
          }
        },
        "36": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": -631,
              "y": 282
            }
          },
          "textMFS": "<VL<T'-0.8'>>",
          "style": {
            "hidden": true,
            "font-size": 11
          }
        },
        "37": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": -631,
              "y": 303
            }
          },
          "textMFS": "<VL<T'-0.7'>>",
          "style": {
            "hidden": true,
            "font-size": 11
          }
        },
        "38": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": -631,
              "y": 324
            }
          },
          "textMFS": "<VL<T'-0.6'>>",
          "style": {
            "hidden": true,
            "font-size": 11
          }
        },
        "39": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": -631,
              "y": 345
            }
          },
          "textMFS": "<VL<T'-0.5'>>",
          "style": {
            "hidden": true,
            "font-size": 11
          }
        },
        "40": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": -631,
              "y": 366
            }
          },
          "textMFS": "<VL<T'-0.4'>>",
          "style": {
            "hidden": true,
            "font-size": 11
          }
        },
        "41": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": -631,
              "y": 387
            }
          },
          "textMFS": "<VL<T'-0.3'>>",
          "style": {
            "hidden": true,
            "font-size": 11
          }
        },
        "42": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": -631,
              "y": 408
            }
          },
          "textMFS": "<VL<T'-0.2'>>",
          "style": {
            "hidden": true,
            "font-size": 11
          }
        },
        "43": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": -631,
              "y": 429
            }
          },
          "textMFS": "<VL<T'-0.1'>>",
          "style": {
            "hidden": true,
            "font-size": 11
          }
        },
        "44": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": -583,
              "y": 260
            }
          },
          "textMFS": "<VL<T'0'>>",
          "style": {
            "hidden": true,
            "font-size": 11
          }
        },
        "45": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": -583,
              "y": 300
            }
          },
          "textMFS": "<VL<T'0.2'>>",
          "style": {
            "hidden": true,
            "font-size": 11
          }
        },
        "46": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": -583,
              "y": 321
            }
          },
          "textMFS": "<VL<T'0.3'>>",
          "style": {
            "hidden": true,
            "font-size": 11
          }
        },
        "47": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": -583,
              "y": 342
            }
          },
          "textMFS": "<VL<T'0.4'>>",
          "style": {
            "hidden": true,
            "font-size": 11
          }
        },
        "48": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": -583,
              "y": 363
            }
          },
          "textMFS": "<VL<T'0.5'>>",
          "style": {
            "hidden": true,
            "font-size": 11
          }
        },
        "49": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": -583,
              "y": 280
            }
          },
          "textMFS": "<VL<T'0.1'>>",
          "style": {
            "hidden": true,
            "font-size": 11
          }
        },
        "50": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": -583,
              "y": 384
            }
          },
          "textMFS": "<VL<T'0.6'>>",
          "style": {
            "hidden": true,
            "font-size": 11
          }
        },
        "51": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": -583,
              "y": 405
            }
          },
          "textMFS": "<VL<T'0.7'>>",
          "style": {
            "hidden": true,
            "font-size": 11
          }
        },
        "52": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": -583,
              "y": 426
            }
          },
          "textMFS": "<VL<T'0.8'>>",
          "style": {
            "hidden": true,
            "font-size": 11
          }
        },
        "53": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": -583,
              "y": 447
            }
          },
          "textMFS": "<VL<T'0.9'>>",
          "style": {
            "hidden": true,
            "font-size": 11
          }
        },
        "54": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 908,
              "y": 121
            }
          },
          "label": "O",
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "55": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "54",
            "distance": "32"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "56": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "32",
            "1": "33"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": -750,
              "y": 375
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1",
          "style": {
            "hidden": true,
            "font-size": 11,
            "color": "red",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "57": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "55",
            "p1": "54"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "color": "red",
            "width": 1
          }
        },
        "58": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "path": "57"
          },
          "constraint": "MeasurementLength",
          "geom": {
            "loc": {
              "x": -468,
              "y": 70
            }
          },
          "style": {
            "hidden": true,
            "font-size": 10,
            "color": "black",
            "precision": 1,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "59": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "34"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": -733,
              "y": 393
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*2",
          "style": {
            "hidden": true,
            "font-size": 11,
            "color": "red",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "60": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": -731,
              "y": 510
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1.2 cm",
          "label": "dis",
          "style": {
            "hidden": true,
            "font-size": 11,
            "color": "blue",
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "61": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": -731,
              "y": 535
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "19",
          "label": "dis #",
          "style": {
            "hidden": true,
            "font-size": 11,
            "color": "blue",
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "62": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": -731,
              "y": 559
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "0.6000000000000001 cm",
          "label": "size",
          "style": {
            "hidden": true,
            "font-size": 11,
            "color": "blue",
            "precision": 1,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "63": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": -634,
              "y": 509
            }
          },
          "textMFS": "<T'-9'>",
          "style": {
            "hidden": true,
            "font-size": 11,
            "color": "blue"
          }
        },
        "64": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": -634,
              "y": 530
            }
          },
          "textMFS": "<T'-8'>",
          "style": {
            "hidden": true,
            "font-size": 11,
            "color": "blue"
          }
        },
        "65": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": -634,
              "y": 551
            }
          },
          "textMFS": "<T'-7'>",
          "style": {
            "hidden": true,
            "font-size": 11,
            "color": "blue"
          }
        },
        "66": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": -634,
              "y": 572
            }
          },
          "textMFS": "<T'-6'>",
          "style": {
            "hidden": true,
            "font-size": 11,
            "color": "blue"
          }
        },
        "67": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": -634,
              "y": 593
            }
          },
          "textMFS": "<T'-5'>",
          "style": {
            "hidden": true,
            "font-size": 11,
            "color": "blue"
          }
        },
        "68": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": -634,
              "y": 614
            }
          },
          "textMFS": "<T'-4'>",
          "style": {
            "hidden": true,
            "font-size": 11,
            "color": "blue"
          }
        },
        "69": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": -634,
              "y": 635
            }
          },
          "textMFS": "<T'-3'>",
          "style": {
            "hidden": true,
            "font-size": 11,
            "color": "blue"
          }
        },
        "70": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": -634,
              "y": 656
            }
          },
          "textMFS": "<T'-2'>",
          "style": {
            "hidden": true,
            "font-size": 11,
            "color": "blue"
          }
        },
        "71": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": -634,
              "y": 677
            }
          },
          "textMFS": "<T'-1'>",
          "style": {
            "hidden": true,
            "font-size": 11,
            "color": "blue"
          }
        },
        "72": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": -610,
              "y": 511
            }
          },
          "textMFS": "<T'0'>",
          "style": {
            "hidden": true,
            "font-size": 11,
            "color": "blue"
          }
        },
        "73": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": -610,
              "y": 553
            }
          },
          "textMFS": "<T'2'>",
          "style": {
            "hidden": true,
            "font-size": 11,
            "color": "blue"
          }
        },
        "74": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": -610,
              "y": 574
            }
          },
          "textMFS": "<T'3'>",
          "style": {
            "hidden": true,
            "font-size": 11,
            "color": "blue"
          }
        },
        "75": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": -610,
              "y": 595
            }
          },
          "textMFS": "<T'4'>",
          "style": {
            "hidden": true,
            "font-size": 11,
            "color": "blue"
          }
        },
        "76": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": -610,
              "y": 616
            }
          },
          "textMFS": "<T'5'>",
          "style": {
            "hidden": true,
            "font-size": 11,
            "color": "blue"
          }
        },
        "77": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": -610,
              "y": 532
            }
          },
          "textMFS": "<T'1'>",
          "style": {
            "hidden": true,
            "font-size": 11,
            "color": "blue"
          }
        },
        "78": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": -610,
              "y": 637
            }
          },
          "textMFS": "<T'6'>",
          "style": {
            "hidden": true,
            "font-size": 11,
            "color": "blue"
          }
        },
        "79": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": -610,
              "y": 658
            }
          },
          "textMFS": "<T'7'>",
          "style": {
            "hidden": true,
            "font-size": 11,
            "color": "blue"
          }
        },
        "80": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": -610,
              "y": 679
            }
          },
          "textMFS": "<T'8'>",
          "style": {
            "hidden": true,
            "font-size": 11,
            "color": "blue"
          }
        },
        "81": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": -610,
              "y": 700
            }
          },
          "textMFS": "<T'9'>",
          "style": {
            "hidden": true,
            "font-size": 11,
            "color": "blue"
          }
        },
        "82": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 937,
              "y": 166
            }
          },
          "label": "S",
          "style": {
            "hidden": true,
            "color": "blue"
          }
        },
        "83": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "82",
            "distance": "60"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "blue"
          }
        },
        "84": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "60",
            "1": "61"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": -755,
              "y": 606
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1",
          "style": {
            "hidden": true,
            "font-size": 11,
            "color": "blue",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "85": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "83",
            "p1": "82"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "color": "blue",
            "width": 1
          }
        },
        "86": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "path": "85"
          },
          "constraint": "MeasurementLength",
          "geom": {
            "loc": {
              "x": -468,
              "y": 89
            }
          },
          "label": "m[16]",
          "style": {
            "hidden": true,
            "font-size": 10,
            "color": "black",
            "precision": 1,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "87": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 200,
              "y": 49
            }
          },
          "style": {
            "hidden": true,
            "color": "green"
          }
        },
        "88": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 200,
              "y": 206
            }
          },
          "style": {
            "hidden": true,
            "color": "green"
          }
        },
        "89": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "87",
            "p1": "88"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "color": "green",
            "width": 1
          }
        },
        "90": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "89"
          },
          "value": 0.7452229299363057,
          "constraint": "PointOnPath",
          "label": "P",
          "style": {
            "hidden": true,
            "color": "blue",
            "label": {
              "showLabel": true,
              "labelOffsetX": -13,
              "labelOffsetY": 5
            }
          }
        },
        "91": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "90",
            "distance": "62"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(0,0,252)"
          }
        },
        "92": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "91",
            "distance": "62"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(0,0,252)"
          }
        },
        "93": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "90",
            "distance": "62"
          },
          "angle": -1.5707963267949,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(0,0,252)"
          }
        },
        "94": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "93",
            "distance": "62"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(0,0,252)"
          }
        },
        "95": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "94",
            "p1": "92"
          },
          "constraint": "Segment",
          "style": {
            "selectable": false,
            "color": "blue",
            "width": 1
          }
        },
        "96": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "90",
            "distance": "84"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(0,0,252)"
          }
        },
        "97": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "90",
            "p1": "96"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "color": "green",
            "width": 1
          }
        },
        "98": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "97"
          },
          "value": 0.7847376934110538,
          "constraint": "PointOnPath",
          "label": "Q",
          "style": {
            "hidden": true,
            "color": "white",
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5
            },
            "radius": 2
          }
        },
        "99": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "p0": "90",
            "obj0": "98"
          },
          "constraint": "MeasurementDistance",
          "geom": {
            "loc": {
              "x": -468,
              "y": 12
            }
          },
          "label": "m[17]",
          "style": {
            "hidden": true,
            "font-size": 10,
            "color": "black",
            "precision": 1,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "100": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "99",
            "1": "86"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": -468,
              "y": 30
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "round(@0/@1)",
          "label": "m[15]",
          "style": {
            "hidden": true,
            "font-size": 10,
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "101": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "100",
            "1": "86"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": -468,
              "y": 206
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1",
          "label": "m[19]",
          "style": {
            "hidden": true,
            "font-size": 10,
            "color": "black",
            "precision": 1,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "102": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "89"
          },
          "value": 0.46496815286624205,
          "constraint": "PointOnPath",
          "label": "L",
          "style": {
            "hidden": true,
            "color": "rgb(0,0,252)",
            "label": {
              "showLabel": true,
              "labelOffsetX": -23,
              "labelOffsetY": -12,
              "color": "black"
            }
          }
        },
        "103": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "102",
            "distance": "34"
          },
          "angle": -1.5707963267949,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(0,0,252)"
          }
        },
        "104": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "103",
            "distance": "34"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(0,0,252)"
          }
        },
        "105": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "104",
            "distance": "59"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(0,0,252)"
          }
        },
        "106": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "105",
            "p1": "104"
          },
          "constraint": "Segment",
          "style": {
            "selectable": false,
            "color": "red",
            "width": 1
          }
        },
        "107": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "106",
            "distance": "59"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "red",
            "width": 1
          }
        },
        "108": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "107",
            "distance": "59"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "red",
            "width": 1
          }
        },
        "109": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "108",
            "distance": "59"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "red",
            "width": 1
          }
        },
        "110": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "109",
            "distance": "59"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "red",
            "width": 1
          }
        },
        "111": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "110",
            "distance": "59"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "red",
            "width": 1
          }
        },
        "112": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "111",
            "distance": "59"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "red",
            "width": 1
          }
        },
        "113": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "112",
            "distance": "59"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "red",
            "width": 1
          }
        },
        "114": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "113",
            "distance": "59"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "red",
            "width": 1
          }
        },
        "115": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "114",
            "distance": "59"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "red",
            "width": 1
          }
        },
        "116": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "115",
            "distance": "59"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "red",
            "width": 1
          }
        },
        "117": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "116",
            "distance": "59"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "red",
            "width": 1
          }
        },
        "118": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "117",
            "distance": "59"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "red",
            "width": 1
          }
        },
        "119": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "118",
            "distance": "59"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "red",
            "width": 1
          }
        },
        "120": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "119",
            "distance": "59"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "red",
            "width": 1
          }
        },
        "121": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "120",
            "distance": "59"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "red",
            "width": 1
          }
        },
        "122": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "121",
            "distance": "59"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "red",
            "width": 1
          }
        },
        "123": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "122",
            "distance": "59"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "red",
            "width": 1
          }
        },
        "124": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "123",
            "distance": "59"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "red",
            "width": 1
          }
        },
        "125": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "102",
            "distance": "34"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(0,0,252)"
          }
        },
        "126": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "125",
            "distance": "34"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(0,0,252)"
          }
        },
        "127": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "105",
            "p1": "126"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "color": "rgb(0,126,0)",
            "width": 1
          }
        },
        "128": {
          "kind": "Point",
          "genus": "Midpoint",
          "parents": {
            "path": "127"
          },
          "constraint": "Midpoint",
          "style": {
            "hidden": true,
            "color": "rgb(0,0,252)"
          }
        },
        "129": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "128",
            "text": "35"
          },
          "constraint": "Pegged",
          "style": {
            "selectable": false,
            "font-size": 14,
            "font-weight": "bold"
          }
        },
        "130": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "128",
            "distance": "59"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(0,0,252)"
          }
        },
        "131": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "130",
            "text": "36"
          },
          "constraint": "Pegged",
          "style": {
            "selectable": false,
            "font-size": 14,
            "font-weight": "bold"
          }
        },
        "132": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "130",
            "distance": "59"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(0,0,252)"
          }
        },
        "133": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "132",
            "text": "37"
          },
          "constraint": "Pegged",
          "style": {
            "selectable": false,
            "font-size": 14,
            "font-weight": "bold"
          }
        },
        "134": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "132",
            "distance": "59"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(0,0,252)"
          }
        },
        "135": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "134",
            "text": "38"
          },
          "constraint": "Pegged",
          "style": {
            "selectable": false,
            "font-size": 14,
            "font-weight": "bold"
          }
        },
        "136": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "134",
            "distance": "59"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(0,0,252)"
          }
        },
        "137": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "136",
            "text": "39"
          },
          "constraint": "Pegged",
          "style": {
            "selectable": false,
            "font-size": 14,
            "font-weight": "bold"
          }
        },
        "138": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "136",
            "distance": "59"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(0,0,252)"
          }
        },
        "139": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "138",
            "text": "40"
          },
          "constraint": "Pegged",
          "style": {
            "selectable": false,
            "font-size": 14,
            "font-weight": "bold"
          }
        },
        "140": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "138",
            "distance": "59"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(0,0,252)"
          }
        },
        "141": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "140",
            "text": "41"
          },
          "constraint": "Pegged",
          "style": {
            "selectable": false,
            "font-size": 14,
            "font-weight": "bold"
          }
        },
        "142": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "140",
            "distance": "59"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(0,0,252)"
          }
        },
        "143": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "142",
            "text": "42"
          },
          "constraint": "Pegged",
          "style": {
            "selectable": false,
            "font-size": 14,
            "font-weight": "bold"
          }
        },
        "144": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "142",
            "distance": "59"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(0,0,252)"
          }
        },
        "145": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "144",
            "text": "43"
          },
          "constraint": "Pegged",
          "style": {
            "selectable": false,
            "font-size": 14,
            "font-weight": "bold"
          }
        },
        "146": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "144",
            "distance": "59"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(0,0,252)"
          }
        },
        "147": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "146",
            "text": "44"
          },
          "constraint": "Pegged",
          "style": {
            "selectable": false,
            "font-size": 18,
            "font-weight": "bold"
          }
        },
        "148": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "146",
            "distance": "59"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(0,0,252)"
          }
        },
        "149": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "148",
            "text": "49"
          },
          "constraint": "Pegged",
          "style": {
            "selectable": false,
            "font-size": 16,
            "font-weight": "bold"
          }
        },
        "150": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "148",
            "distance": "59"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(0,0,252)"
          }
        },
        "151": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "150",
            "text": "45"
          },
          "constraint": "Pegged",
          "style": {
            "selectable": false,
            "font-size": 16,
            "font-weight": "bold"
          }
        },
        "152": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "150",
            "distance": "59"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(0,0,252)"
          }
        },
        "153": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "152",
            "text": "46"
          },
          "constraint": "Pegged",
          "style": {
            "selectable": false,
            "font-size": 16,
            "font-weight": "bold"
          }
        },
        "154": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "152",
            "distance": "59"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(0,0,252)"
          }
        },
        "155": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "154",
            "text": "47"
          },
          "constraint": "Pegged",
          "style": {
            "selectable": false,
            "font-size": 16,
            "font-weight": "bold"
          }
        },
        "156": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "154",
            "distance": "59"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(0,0,252)"
          }
        },
        "157": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "156",
            "text": "48"
          },
          "constraint": "Pegged",
          "style": {
            "selectable": false,
            "font-size": 16,
            "font-weight": "bold"
          }
        },
        "158": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "156",
            "distance": "59"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(0,0,252)"
          }
        },
        "159": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "158",
            "text": "50"
          },
          "constraint": "Pegged",
          "style": {
            "selectable": false,
            "font-size": 16,
            "font-weight": "bold"
          }
        },
        "160": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "158",
            "distance": "59"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(0,0,252)"
          }
        },
        "161": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "160",
            "text": "51"
          },
          "constraint": "Pegged",
          "style": {
            "selectable": false,
            "font-size": 16,
            "font-weight": "bold"
          }
        },
        "162": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "160",
            "distance": "59"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(0,0,252)"
          }
        },
        "163": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "162",
            "text": "52"
          },
          "constraint": "Pegged",
          "style": {
            "selectable": false,
            "font-size": 16,
            "font-weight": "bold"
          }
        },
        "164": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "104",
            "p1": "126"
          },
          "constraint": "Segment",
          "style": {
            "selectable": false,
            "color": "red",
            "width": 1
          }
        },
        "165": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "164",
            "distance": "59"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "red",
            "width": 1
          }
        },
        "166": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "165",
            "distance": "59"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "red",
            "width": 1
          }
        },
        "167": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "166",
            "distance": "59"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "red",
            "width": 1
          }
        },
        "168": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "126",
            "distance": "59"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(0,0,252)"
          }
        },
        "169": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "168",
            "p1": "126"
          },
          "constraint": "Segment",
          "style": {
            "selectable": false,
            "color": "red",
            "width": 1
          }
        },
        "170": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "169",
            "distance": "59"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "red",
            "width": 1
          }
        },
        "171": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "170",
            "distance": "59"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "red",
            "width": 1
          }
        },
        "172": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "171",
            "distance": "59"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "red",
            "width": 1
          }
        },
        "173": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "172",
            "distance": "59"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "red",
            "width": 1
          }
        },
        "174": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "173",
            "distance": "59"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "red",
            "width": 1
          }
        },
        "175": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "174",
            "distance": "59"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "red",
            "width": 1
          }
        },
        "176": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "175",
            "distance": "59"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "red",
            "width": 1
          }
        },
        "177": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "176",
            "distance": "59"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "red",
            "width": 1
          }
        },
        "178": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "177",
            "distance": "59"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "red",
            "width": 1
          }
        },
        "179": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "178",
            "distance": "59"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "red",
            "width": 1
          }
        },
        "180": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "179",
            "distance": "59"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "red",
            "width": 1
          }
        },
        "181": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "180",
            "distance": "59"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "red",
            "width": 1
          }
        },
        "182": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "181",
            "distance": "59"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "red",
            "width": 1
          }
        },
        "183": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "182",
            "distance": "59"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "red",
            "width": 1
          }
        },
        "184": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "183",
            "distance": "59"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "red",
            "width": 1
          }
        },
        "185": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "184",
            "distance": "59"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "red",
            "width": 1
          }
        },
        "186": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "185",
            "distance": "59"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "red",
            "width": 1
          }
        },
        "187": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "186",
            "distance": "59"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "red",
            "width": 1
          }
        },
        "188": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "105",
            "p1": "168"
          },
          "constraint": "Segment",
          "style": {
            "selectable": false,
            "color": "red",
            "width": 1
          }
        },
        "189": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "188",
            "distance": "59"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "red",
            "width": 1
          }
        },
        "190": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "189",
            "distance": "59"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "red",
            "width": 1
          }
        },
        "191": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "190",
            "distance": "59"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "red",
            "width": 1
          }
        },
        "192": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "191",
            "distance": "59"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "red",
            "width": 1
          }
        },
        "193": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "192",
            "distance": "59"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "red",
            "width": 1
          }
        },
        "194": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "193",
            "distance": "59"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "red",
            "width": 1
          }
        },
        "195": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "194",
            "distance": "59"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "red",
            "width": 1
          }
        },
        "196": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "195",
            "distance": "59"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "red",
            "width": 1
          }
        },
        "197": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "196",
            "distance": "59"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "red",
            "width": 1
          }
        },
        "198": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "197",
            "distance": "59"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "red",
            "width": 1
          }
        },
        "199": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "198",
            "distance": "59"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "red",
            "width": 1
          }
        },
        "200": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "199",
            "distance": "59"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "red",
            "width": 1
          }
        },
        "201": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "200",
            "distance": "59"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "red",
            "width": 1
          }
        },
        "202": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "201",
            "distance": "59"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "red",
            "width": 1
          }
        },
        "203": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "202",
            "distance": "59"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "red",
            "width": 1
          }
        },
        "204": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "203",
            "distance": "59"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "red",
            "width": 1
          }
        },
        "205": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "204",
            "distance": "59"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "red",
            "width": 1
          }
        },
        "206": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "205",
            "distance": "59"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "red",
            "width": 1
          }
        },
        "207": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "102",
            "distance": "56"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(0,0,252)"
          }
        },
        "208": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "207",
            "text": "53"
          },
          "constraint": "Pegged",
          "style": {
            "selectable": false,
            "font-size": 16,
            "font-weight": "bold"
          }
        },
        "209": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "102",
            "p1": "207"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "color": "green",
            "width": 1
          }
        },
        "210": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "209"
          },
          "value": 0.7847376934110538,
          "constraint": "PointOnPath",
          "label": "M",
          "style": {
            "hidden": true,
            "color": "white",
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5,
              "color": "black"
            },
            "radius": 2
          }
        },
        "211": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "p0": "102",
            "obj0": "210"
          },
          "constraint": "MeasurementDistance",
          "geom": {
            "loc": {
              "x": -468,
              "y": 148
            }
          },
          "style": {
            "hidden": true,
            "font-size": 10,
            "color": "black",
            "precision": 1,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "212": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "211",
            "1": "58"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": -468,
              "y": 166
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "round(@0/@1)",
          "label": "m[19]",
          "style": {
            "hidden": true,
            "font-size": 10,
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "213": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "212",
            "1": "58"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": -468,
              "y": 108
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1",
          "label": "m[19]",
          "style": {
            "hidden": true,
            "font-size": 10,
            "color": "black",
            "precision": 1,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "214": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "89"
          },
          "value": 0.18471337579617833,
          "constraint": "PointOnPath",
          "label": "K",
          "style": {
            "hidden": true,
            "color": "rgb(0,0,252)",
            "label": {
              "showLabel": true,
              "labelOffsetX": -24,
              "labelOffsetY": -12,
              "font-weight": "normal",
              "color": "black"
            }
          }
        },
        "215": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "214",
            "distance": "10"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(0,0,252)"
          }
        },
        "216": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "215",
            "distance": "10"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(0,0,252)"
          }
        },
        "217": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "216",
            "distance": "11"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(0,0,252)"
          }
        },
        "218": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "217",
            "p1": "216"
          },
          "constraint": "Segment",
          "style": {
            "selectable": false,
            "color": "rgb(0,126,0)",
            "width": 1
          }
        },
        "219": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "218",
            "distance": "11"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "rgb(0,126,0)",
            "width": 1
          }
        },
        "220": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "219",
            "distance": "11"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "rgb(0,126,0)",
            "width": 1
          }
        },
        "221": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "220",
            "distance": "11"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "rgb(0,126,0)",
            "width": 1
          }
        },
        "222": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "221",
            "distance": "11"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "rgb(0,126,0)",
            "width": 1
          }
        },
        "223": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "222",
            "distance": "11"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "rgb(0,126,0)",
            "width": 1
          }
        },
        "224": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "223",
            "distance": "11"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "rgb(0,126,0)",
            "width": 1
          }
        },
        "225": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "224",
            "distance": "11"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "rgb(0,126,0)",
            "width": 1
          }
        },
        "226": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "225",
            "distance": "11"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "rgb(0,126,0)",
            "width": 1
          }
        },
        "227": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "226",
            "distance": "11"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "rgb(0,126,0)",
            "width": 1
          }
        },
        "228": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "227",
            "distance": "11"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "rgb(0,126,0)",
            "width": 1
          }
        },
        "229": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "228",
            "distance": "11"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "rgb(0,126,0)",
            "width": 1
          }
        },
        "230": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "229",
            "distance": "11"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "rgb(0,126,0)",
            "width": 1
          }
        },
        "231": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "230",
            "distance": "11"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "rgb(0,126,0)",
            "width": 1
          }
        },
        "232": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "231",
            "distance": "11"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "rgb(0,126,0)",
            "width": 1
          }
        },
        "233": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "232",
            "distance": "11"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "rgb(0,126,0)",
            "width": 1
          }
        },
        "234": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "233",
            "distance": "11"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "rgb(0,126,0)",
            "width": 1
          }
        },
        "235": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "234",
            "distance": "11"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "rgb(0,126,0)",
            "width": 1
          }
        },
        "236": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "235",
            "distance": "11"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "rgb(0,126,0)",
            "width": 1
          }
        },
        "237": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "214",
            "distance": "10"
          },
          "angle": -1.5707963267949,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(0,0,252)"
          }
        },
        "238": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "237",
            "distance": "10"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(0,0,252)"
          }
        },
        "239": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "238",
            "p1": "216"
          },
          "constraint": "Segment",
          "style": {
            "selectable": false,
            "color": "rgb(0,126,0)",
            "width": 1
          }
        },
        "240": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "239",
            "distance": "11"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "rgb(0,126,0)",
            "width": 1
          }
        },
        "241": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "240",
            "distance": "11"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "rgb(0,126,0)",
            "width": 1
          }
        },
        "242": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "241",
            "distance": "11"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "rgb(0,126,0)",
            "width": 1
          }
        },
        "243": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "238",
            "distance": "11"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(0,0,252)"
          }
        },
        "244": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "243",
            "p1": "216"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "color": "rgb(0,126,0)",
            "width": 1
          }
        },
        "245": {
          "kind": "Point",
          "genus": "Midpoint",
          "parents": {
            "path": "244"
          },
          "constraint": "Midpoint",
          "style": {
            "hidden": true,
            "color": "rgb(0,0,252)"
          }
        },
        "246": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "245",
            "distance": "11"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(0,0,252)"
          }
        },
        "247": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "246",
            "text": "14"
          },
          "constraint": "Pegged",
          "style": {
            "selectable": false,
            "font-size": 18,
            "font-weight": "bold",
            "color": "green"
          }
        },
        "248": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "246",
            "distance": "11"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(0,0,252)"
          }
        },
        "249": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "248",
            "text": "15"
          },
          "constraint": "Pegged",
          "style": {
            "selectable": false,
            "font-size": 18,
            "font-weight": "bold",
            "color": "green"
          }
        },
        "250": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "248",
            "distance": "11"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(0,0,252)"
          }
        },
        "251": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "250",
            "text": "16"
          },
          "constraint": "Pegged",
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "font-size": 18,
            "font-weight": "bold",
            "color": "green"
          }
        },
        "252": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "250",
            "distance": "11"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(0,0,252)"
          }
        },
        "253": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "252",
            "text": "17"
          },
          "constraint": "Pegged",
          "style": {
            "selectable": false,
            "font-size": 18,
            "font-weight": "bold",
            "color": "green"
          }
        },
        "254": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "252",
            "distance": "11"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(0,0,252)"
          }
        },
        "255": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "254",
            "text": "18"
          },
          "constraint": "Pegged",
          "style": {
            "selectable": false,
            "font-size": 18,
            "font-weight": "bold",
            "color": "green"
          }
        },
        "256": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "254",
            "distance": "11"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(0,0,252)"
          }
        },
        "257": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "256",
            "text": "19"
          },
          "constraint": "Pegged",
          "style": {
            "selectable": false,
            "font-size": 18,
            "font-weight": "bold",
            "color": "green"
          }
        },
        "258": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "256",
            "distance": "11"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(0,0,252)"
          }
        },
        "259": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "258",
            "text": "20"
          },
          "constraint": "Pegged",
          "style": {
            "selectable": false,
            "font-size": 18,
            "font-weight": "bold",
            "color": "green"
          }
        },
        "260": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "258",
            "distance": "11"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(0,0,252)"
          }
        },
        "261": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "260",
            "text": "21"
          },
          "constraint": "Pegged",
          "style": {
            "selectable": false,
            "font-size": 18,
            "font-weight": "bold",
            "color": "green"
          }
        },
        "262": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "260",
            "distance": "11"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(0,0,252)"
          }
        },
        "263": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "262",
            "text": "22"
          },
          "constraint": "Pegged",
          "style": {
            "selectable": false,
            "font-size": 18,
            "font-weight": "bold",
            "color": "green"
          }
        },
        "264": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "262",
            "distance": "11"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(0,0,252)"
          }
        },
        "265": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "264",
            "text": "27"
          },
          "constraint": "Pegged",
          "style": {
            "selectable": false,
            "font-size": 18,
            "font-weight": "bold",
            "color": "green"
          }
        },
        "266": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "264",
            "distance": "11"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(0,0,252)"
          }
        },
        "267": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "266",
            "text": "23"
          },
          "constraint": "Pegged",
          "style": {
            "selectable": false,
            "font-size": 18,
            "font-weight": "bold",
            "color": "green"
          }
        },
        "268": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "266",
            "distance": "11"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(0,0,252)"
          }
        },
        "269": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "268",
            "text": "24"
          },
          "constraint": "Pegged",
          "style": {
            "selectable": false,
            "font-size": 18,
            "font-weight": "bold",
            "color": "green"
          }
        },
        "270": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "268",
            "distance": "11"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(0,0,252)"
          }
        },
        "271": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "270",
            "text": "25"
          },
          "constraint": "Pegged",
          "style": {
            "selectable": false,
            "font-size": 18,
            "font-weight": "bold",
            "color": "green"
          }
        },
        "272": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "270",
            "distance": "11"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(0,0,252)"
          }
        },
        "273": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "272",
            "text": "26"
          },
          "constraint": "Pegged",
          "style": {
            "selectable": false,
            "font-size": 18,
            "font-weight": "bold",
            "color": "green"
          }
        },
        "274": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "272",
            "distance": "11"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(0,0,252)"
          }
        },
        "275": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "274",
            "text": "28"
          },
          "constraint": "Pegged",
          "style": {
            "selectable": false,
            "font-size": 18,
            "font-weight": "bold",
            "color": "green"
          }
        },
        "276": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "274",
            "distance": "11"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(0,0,252)"
          }
        },
        "277": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "276",
            "text": "29"
          },
          "constraint": "Pegged",
          "style": {
            "selectable": false,
            "font-size": 18,
            "font-weight": "bold",
            "color": "green"
          }
        },
        "278": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "276",
            "distance": "11"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(0,0,252)"
          }
        },
        "279": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "278",
            "text": "30"
          },
          "constraint": "Pegged",
          "style": {
            "selectable": false,
            "font-size": 18,
            "font-weight": "bold",
            "color": "green"
          }
        },
        "280": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "278",
            "distance": "11"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(0,0,252)"
          }
        },
        "281": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "243",
            "p1": "238"
          },
          "constraint": "Segment",
          "style": {
            "selectable": false,
            "color": "rgb(0,126,0)",
            "width": 1
          }
        },
        "282": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "281",
            "distance": "11"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "rgb(0,126,0)",
            "width": 1
          }
        },
        "283": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "282",
            "distance": "11"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "rgb(0,126,0)",
            "width": 1
          }
        },
        "284": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "283",
            "distance": "11"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "rgb(0,126,0)",
            "width": 1
          }
        },
        "285": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "284",
            "distance": "11"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "rgb(0,126,0)",
            "width": 1
          }
        },
        "286": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "285",
            "distance": "11"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "rgb(0,126,0)",
            "width": 1
          }
        },
        "287": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "286",
            "distance": "11"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "rgb(0,126,0)",
            "width": 1
          }
        },
        "288": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "287",
            "distance": "11"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "rgb(0,126,0)",
            "width": 1
          }
        },
        "289": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "288",
            "distance": "11"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "rgb(0,126,0)",
            "width": 1
          }
        },
        "290": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "289",
            "distance": "11"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "rgb(0,126,0)",
            "width": 1
          }
        },
        "291": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "290",
            "distance": "11"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "rgb(0,126,0)",
            "width": 1
          }
        },
        "292": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "291",
            "distance": "11"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "rgb(0,126,0)",
            "width": 1
          }
        },
        "293": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "292",
            "distance": "11"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "rgb(0,126,0)",
            "width": 1
          }
        },
        "294": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "293",
            "distance": "11"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "rgb(0,126,0)",
            "width": 1
          }
        },
        "295": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "294",
            "distance": "11"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "rgb(0,126,0)",
            "width": 1
          }
        },
        "296": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "295",
            "distance": "11"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "rgb(0,126,0)",
            "width": 1
          }
        },
        "297": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "296",
            "distance": "11"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "rgb(0,126,0)",
            "width": 1
          }
        },
        "298": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "297",
            "distance": "11"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "rgb(0,126,0)",
            "width": 1
          }
        },
        "299": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "298",
            "distance": "11"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "rgb(0,126,0)",
            "width": 1
          }
        },
        "300": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "243",
            "p1": "217"
          },
          "constraint": "Segment",
          "style": {
            "selectable": false,
            "color": "rgb(0,126,0)",
            "width": 1
          }
        },
        "301": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "300",
            "distance": "11"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "rgb(0,126,0)",
            "width": 1
          }
        },
        "302": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "301",
            "distance": "11"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "rgb(0,126,0)",
            "width": 1
          }
        },
        "303": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "302",
            "distance": "11"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "rgb(0,126,0)",
            "width": 1
          }
        },
        "304": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "303",
            "distance": "11"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "rgb(0,126,0)",
            "width": 1
          }
        },
        "305": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "304",
            "distance": "11"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "rgb(0,126,0)",
            "width": 1
          }
        },
        "306": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "305",
            "distance": "11"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "rgb(0,126,0)",
            "width": 1
          }
        },
        "307": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "306",
            "distance": "11"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "rgb(0,126,0)",
            "width": 1
          }
        },
        "308": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "307",
            "distance": "11"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "rgb(0,126,0)",
            "width": 1
          }
        },
        "309": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "308",
            "distance": "11"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "rgb(0,126,0)",
            "width": 1
          }
        },
        "310": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "309",
            "distance": "11"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "rgb(0,126,0)",
            "width": 1
          }
        },
        "311": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "310",
            "distance": "11"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "rgb(0,126,0)",
            "width": 1
          }
        },
        "312": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "311",
            "distance": "11"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "rgb(0,126,0)",
            "width": 1
          }
        },
        "313": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "312",
            "distance": "11"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "rgb(0,126,0)",
            "width": 1
          }
        },
        "314": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "313",
            "distance": "11"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "rgb(0,126,0)",
            "width": 1
          }
        },
        "315": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "314",
            "distance": "11"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "rgb(0,126,0)",
            "width": 1
          }
        },
        "316": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "315",
            "distance": "11"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "rgb(0,126,0)",
            "width": 1
          }
        },
        "317": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "316",
            "distance": "11"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "rgb(0,126,0)",
            "width": 1
          }
        },
        "318": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "317",
            "distance": "11"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "rgb(0,126,0)",
            "width": 1
          }
        },
        "319": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "214",
            "distance": "7"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(0,0,252)"
          }
        },
        "320": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "319",
            "text": "31"
          },
          "constraint": "Pegged",
          "style": {
            "selectable": false,
            "font-size": 18,
            "font-weight": "bold",
            "color": "green"
          }
        },
        "321": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "214",
            "p1": "319"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "color": "green",
            "width": 1
          }
        },
        "322": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "321"
          },
          "value": 0.7847376934110538,
          "constraint": "PointOnPath",
          "label": "I",
          "style": {
            "hidden": true,
            "color": "white",
            "label": {
              "showLabel": true,
              "labelOffsetX": -4,
              "labelOffsetY": 5,
              "font-weight": "normal",
              "color": "black"
            },
            "radius": 2
          }
        },
        "323": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "p0": "214",
            "obj0": "322"
          },
          "constraint": "MeasurementDistance",
          "geom": {
            "loc": {
              "x": 411,
              "y": 691
            }
          },
          "style": {
            "hidden": true,
            "font-size": 14,
            "color": "black",
            "precision": 1,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "324": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "323",
            "1": "9"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 411,
              "y": 691
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "round(@0/@1)",
          "style": {
            "hidden": true,
            "font-size": 14,
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "325": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "324",
            "1": "9"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 411,
              "y": 691
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1",
          "style": {
            "hidden": true,
            "font-size": 14,
            "color": "black",
            "precision": 1,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "326": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "214",
            "radius": "325"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true,
            "color": "black",
            "width": 1
          }
        },
        "327": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "321",
            "circle": "326"
          },
          "constraint": "Intersection2",
          "style": {
            "hidden": true,
            "color": "blue",
            "radius": 2
          }
        },
        "328": {
          "kind": "Sampler",
          "genus": "PointLocus",
          "parents": {
            "0": "323",
            "1": "324",
            "2": "325",
            "3": "326",
            "4": "327",
            "drivenObject": "327",
            "domainObject": "321",
            "driverObject": "322"
          },
          "constraint": "GeomLocus",
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2,
            "endpointRadius": 2,
            "arrowheadRadius": 6.5
          },
          "numSamples": 500,
          "isDiscrete": true,
          "showEndpoints": true,
          "driverDomain": {
            "low": 0,
            "high": 1
          }
        },
        "329": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "328"
          },
          "value": 0.7635270541082171,
          "constraint": "PointOnPath",
          "label": "J",
          "style": {
            "hidden": true,
            "color": "green",
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5,
              "color": "black"
            },
            "radius": 2
          }
        },
        "330": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "p0": "329",
            "obj0": "214"
          },
          "constraint": "MeasurementDistance",
          "geom": {
            "loc": {
              "x": -733,
              "y": 16
            }
          },
          "label": "m[10]",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "331": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "330",
            "1": "4"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 870,
              "y": 68
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "round(@0/@1-10)",
          "label": "m",
          "style": {
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "332": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "331"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": -730,
              "y": 181
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(@0)-1",
          "label": "m[8]",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 0,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "333": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "329",
            "distance": "10"
          },
          "angle": -1.5707963267949,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "green",
            "radius": 2
          }
        },
        "334": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "333",
            "distance": "10"
          },
          "angle": 3.1415926535897865,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "green",
            "radius": 2
          }
        },
        "335": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "333",
            "distance": "10"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "green",
            "radius": 2
          }
        },
        "336": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "333",
            "center": "329"
          },
          "angle": 3.1415926535897865,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "green",
            "radius": 2
          }
        },
        "337": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "336",
            "distance": "10"
          },
          "angle": 3.1415926535897865,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "green",
            "radius": 2
          }
        },
        "338": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "336",
            "distance": "10"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "green",
            "radius": 2
          }
        },
        "339": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": -631,
              "y": 718
            }
          },
          "textMFS": "<VL<T'y'>>",
          "style": {
            "hidden": true,
            "font-size": 11,
            "color": "blue"
          }
        },
        "340": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": -631,
              "y": 697
            }
          },
          "textMFS": "<VL<T'x'>>",
          "style": {
            "hidden": true,
            "font-size": 11,
            "color": "blue"
          }
        },
        "341": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "96",
            "distance": "60"
          },
          "angle": 3.1415926535897865,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(0,0,252)"
          }
        },
        "342": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": -931,
              "y": 788
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1.05 cm",
          "label": "dist+",
          "style": {
            "hidden": true,
            "color": "blue",
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "343": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": -931,
              "y": 814
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1.4 cm",
          "label": "dist-",
          "style": {
            "hidden": true,
            "color": "blue",
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "344": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "331"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": -653,
              "y": 817
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(-.5+sgn(@0)))/2",
          "label": "m<=0",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "345": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "344"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": -757,
              "y": 805
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1 cm/@0",
          "label": "m[19]",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "346": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "331"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": -757,
              "y": 745
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "label": "m=0",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "347": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "331"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": -757,
              "y": 765
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(.5+sgn(@0)))/2",
          "label": "m<0",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "348": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "347",
            "1": "346"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": -757,
              "y": 785
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*0.5 cm+@1*1 cm",
          "label": "m[19]",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "349": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": -293,
              "y": 491
            }
          },
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "350": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 28,
              "y": 302
            }
          },
          "label": "S[1]",
          "style": {
            "hidden": true,
            "color": "red",
            "label": {
              "showLabel": true,
              "labelOffsetX": -11,
              "labelOffsetY": -30
            }
          }
        },
        "351": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1029,
              "y": 302
            }
          },
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "352": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "350",
            "p1": "351"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "color": "black",
            "width": 1
          }
        },
        "353": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1029,
              "y": 370
            }
          },
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "354": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 28,
              "y": 370
            }
          },
          "label": "T[1]",
          "style": {
            "hidden": true,
            "color": "red",
            "label": {
              "showLabel": true,
              "labelOffsetX": -23,
              "labelOffsetY": 0
            }
          }
        },
        "355": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "354",
            "p1": "353"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "color": "black",
            "width": 1
          }
        },
        "356": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "350",
            "p1": "354"
          },
          "constraint": "Segment",
          "style": {
            "selectable": false,
            "color": "rgb(217,185,152)",
            "width": 1
          }
        },
        "357": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "351",
            "p1": "353"
          },
          "constraint": "Segment",
          "style": {
            "selectable": false,
            "color": "rgb(217,185,152)",
            "width": 1
          }
        },
        "358": {
          "kind": "Point",
          "genus": "Midpoint",
          "parents": {
            "path": "357"
          },
          "constraint": "Midpoint",
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "359": {
          "kind": "Arc",
          "genus": "SimpleArc",
          "parents": {
            "center": "358",
            "p0": "353",
            "p1": "351"
          },
          "constraint": "ArcAroundPoint",
          "style": {
            "hidden": true,
            "color": "rgb(0,121,0)",
            "width": 1
          }
        },
        "360": {
          "kind": "ArcInterior",
          "genus": "ArcSector",
          "parents": {
            "arc": "359"
          },
          "constraint": "ArcSector",
          "style": {
            "selectable": false,
            "opacity": 1,
            "layerOrder": 1
          }
        },
        "361": {
          "kind": "Point",
          "genus": "Midpoint",
          "parents": {
            "path": "356"
          },
          "constraint": "Midpoint",
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "362": {
          "kind": "Arc",
          "genus": "SimpleArc",
          "parents": {
            "center": "361",
            "p0": "350",
            "p1": "354"
          },
          "constraint": "ArcAroundPoint",
          "style": {
            "hidden": true,
            "color": "rgb(0,121,0)",
            "width": 1
          }
        },
        "363": {
          "kind": "ArcInterior",
          "genus": "ArcSector",
          "parents": {
            "arc": "362"
          },
          "constraint": "ArcSector",
          "style": {
            "selectable": false,
            "opacity": 1,
            "layerOrder": 2
          }
        },
        "364": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "0": "353",
            "1": "351",
            "2": "350",
            "3": "354"
          },
          "constraint": "PolygonFromPoints",
          "style": {
            "selectable": false,
            "opacity": 1,
            "layerOrder": 3
          }
        },
        "365": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 65,
              "y": 275
            }
          },
          "latentVisibility": true,
          "label": "W[1]",
          "style": {
            "hidden": true,
            "color": "blue"
          }
        },
        "366": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": -931,
              "y": 741
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1 cm",
          "label": "spacing label",
          "style": {
            "hidden": true,
            "font-size": 9,
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "367": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1083,
              "y": 293
            }
          },
          "style": {
            "hidden": true,
            "color": "green"
          }
        },
        "368": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "102",
            "radius": "213"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "369": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "209",
            "circle": "368"
          },
          "constraint": "Intersection2",
          "style": {
            "hidden": true,
            "color": "blue",
            "radius": 2
          }
        },
        "370": {
          "kind": "Sampler",
          "genus": "PointLocus",
          "parents": {
            "0": "211",
            "1": "212",
            "2": "213",
            "3": "368",
            "4": "369",
            "drivenObject": "369",
            "domainObject": "209",
            "driverObject": "210"
          },
          "constraint": "GeomLocus",
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2,
            "endpointRadius": 2,
            "arrowheadRadius": 6.5
          },
          "numSamples": 500,
          "isDiscrete": true,
          "showEndpoints": true,
          "driverDomain": {
            "low": 0,
            "high": 1
          }
        },
        "371": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "370"
          },
          "value": 0.18436873747495003,
          "constraint": "PointOnPath",
          "label": "N",
          "style": {
            "hidden": true,
            "color": "red",
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5
            },
            "radius": 2
          }
        },
        "372": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "p0": "371",
            "obj0": "102"
          },
          "constraint": "MeasurementDistance",
          "geom": {
            "loc": {
              "x": -728,
              "y": 335
            }
          },
          "label": "m[11]",
          "style": {
            "hidden": true,
            "color": "red",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "373": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "372",
            "1": "32"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 871,
              "y": 113
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "round(@0/@1-10)/10",
          "label": "base",
          "style": {
            "color": "red",
            "precision": 1,
            "nameOrigin": "namedFromLabel"
          }
        },
        "374": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "373"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": -723,
              "y": 354
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(@0)",
          "label": "m[9]",
          "style": {
            "hidden": true,
            "font-family": 0,
            "color": "red",
            "precision": 1,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "375": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "371",
            "distance": "34"
          },
          "angle": -1.5707963267949,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "green",
            "radius": 2
          }
        },
        "376": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "375",
            "distance": "34"
          },
          "angle": 3.1415926535897865,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "green",
            "radius": 2
          }
        },
        "377": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "375",
            "center": "371"
          },
          "angle": 3.1415926535897865,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "green",
            "radius": 2
          }
        },
        "378": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "377",
            "distance": "34"
          },
          "angle": 3.1415926535897865,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "green",
            "radius": 2
          }
        },
        "379": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "377",
            "distance": "34"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "green",
            "radius": 2
          }
        },
        "380": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "375",
            "distance": "34"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "green",
            "radius": 2
          }
        },
        "381": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "0": "379",
            "1": "380",
            "2": "376",
            "3": "378"
          },
          "constraint": "PolygonFromPoints",
          "latentVisibility": true,
          "style": {
            "color": "rgb(160,160,160)",
            "layerOrder": 0
          }
        },
        "382": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "90",
            "radius": "101"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "383": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "97",
            "circle": "382"
          },
          "constraint": "Intersection2",
          "style": {
            "hidden": true,
            "color": "blue",
            "radius": 2
          }
        },
        "384": {
          "kind": "Sampler",
          "genus": "PointLocus",
          "parents": {
            "0": "99",
            "1": "100",
            "2": "101",
            "3": "382",
            "4": "383",
            "drivenObject": "383",
            "domainObject": "97",
            "driverObject": "98"
          },
          "constraint": "GeomLocus",
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2,
            "endpointRadius": 2,
            "arrowheadRadius": 6.5
          },
          "numSamples": 500,
          "isDiscrete": true,
          "showEndpoints": true,
          "driverDomain": {
            "low": 0,
            "high": 1
          }
        },
        "385": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "384"
          },
          "value": 0.8176352705410829,
          "constraint": "PointOnPath",
          "label": "R",
          "style": {
            "hidden": true,
            "color": "blue",
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5
            },
            "radius": 2
          }
        },
        "386": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "385",
            "distance": "62"
          },
          "angle": -1.5707963267949,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "green",
            "radius": 2
          }
        },
        "387": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "386",
            "distance": "62"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "green",
            "radius": 2
          }
        },
        "388": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "386",
            "distance": "62"
          },
          "angle": 3.1415926535897865,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "green",
            "radius": 2
          }
        },
        "389": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "386",
            "center": "385"
          },
          "angle": 3.1415926535897865,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "green",
            "radius": 2
          }
        },
        "390": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "389",
            "distance": "62"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "green",
            "radius": 2
          }
        },
        "391": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "389",
            "distance": "62"
          },
          "angle": 3.1415926535897865,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "green",
            "radius": 2
          }
        },
        "392": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "0": "390",
            "1": "387",
            "2": "388",
            "3": "391"
          },
          "constraint": "PolygonFromPoints",
          "latentVisibility": true,
          "style": {
            "color": "rgb(160,160,160)",
            "layerOrder": 0
          }
        },
        "393": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "p0": "385",
            "obj0": "90"
          },
          "constraint": "MeasurementDistance",
          "geom": {
            "loc": {
              "x": -732,
              "y": 587
            }
          },
          "label": "m[12]",
          "style": {
            "hidden": true,
            "color": "blue",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "394": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "393",
            "1": "60"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 872,
              "y": 156
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "round(@0/@1-10)",
          "label": "base",
          "style": {
            "color": "blue",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "395": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "394"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 935,
              "y": 151
            }
          },
          "textMFS": "<VL<?1xC0001<H<T'6'>>>>",
          "style": {
            "hidden": true,
            "font-size": 16,
            "color": "blue"
          }
        },
        "396": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "395"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 809,
              "y": 690
            }
          },
          "textMFS": "<H<T'('><?1x1<H<H<T'6'>>>><T')'>>",
          "style": {
            "hidden": true,
            "font-size": 22,
            "color": "blue"
          }
        },
        "397": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "394"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": -931,
              "y": 840
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(.5+sgn(@0)))/2",
          "label": "base<0",
          "style": {
            "hidden": true,
            "color": "blue",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "398": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "397"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": -931,
              "y": 860
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "label": "\u00ac(base<0)",
          "style": {
            "hidden": true,
            "color": "blue",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "399": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "397",
            "1": "343",
            "2": "398",
            "3": "342"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": -931,
              "y": 880
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1+@2*@3",
          "label": "m[13]",
          "style": {
            "hidden": true,
            "color": "blue",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "400": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "367",
            "distance": "399"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "green"
          }
        },
        "401": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "400",
            "text": "396"
          },
          "constraint": "Pegged",
          "style": {
            "hidden": true,
            "font-size": 22
          }
        },
        "402": {
          "kind": "Map",
          "genus": "IterateMap",
          "parents": {
            "0": "400",
            "1": "401",
            "preimage0": "367",
            "map0image0": "400",
            "depth": "374"
          },
          "constraint": "IterateMapByParametricDepth",
          "rerandomizePointsOnPaths": false,
          "finalIterationOnly": false
        },
        "403": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "401",
            "map": "402"
          },
          "constraint": "IterateImage",
          "style": {
            "selectable": false,
            "color": "red"
          }
        },
        "404": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": -611,
              "y": 8
            }
          },
          "textMFS": "<T'-9'>",
          "style": {
            "hidden": true,
            "font-size": 11,
            "color": "green"
          }
        },
        "405": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "245",
            "text": "404"
          },
          "constraint": "Pegged",
          "style": {
            "selectable": false,
            "font-size": 18,
            "font-weight": "bold",
            "color": "green"
          }
        },
        "406": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": -733,
              "y": -14
            }
          },
          "textMFS": "<VL<T'exponent selector'>>",
          "style": {
            "hidden": true,
            "font-size": 10,
            "color": "black"
          }
        },
        "407": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": -727,
              "y": 235
            }
          },
          "textMFS": "<VL<T'base selector |base| < 1'>>",
          "style": {
            "hidden": true,
            "font-size": 10,
            "color": "black"
          }
        },
        "408": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": -736,
              "y": 479
            }
          },
          "textMFS": "<VL<T'base selector |base| > 1'>>",
          "style": {
            "hidden": true,
            "font-size": 10,
            "color": "black"
          }
        },
        "409": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": -477,
              "y": -17
            }
          },
          "textMFS": "<VL<T'discrete sliders for bases'>>",
          "style": {
            "hidden": true,
            "font-size": 10,
            "color": "black"
          }
        },
        "410": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": -931,
              "y": 947
            }
          },
          "textMFS": "<T'length of vinculum'>",
          "style": {
            "hidden": true,
            "font-size": 10,
            "color": "black"
          }
        },
        "411": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "332",
            "1": "399"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": -931,
              "y": 900
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(@0+1)*@1/2",
          "label": "m[13]",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "412": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": -931,
              "y": 764
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1 cm",
          "label": "spacing label 2",
          "style": {
            "hidden": true,
            "font-size": 10,
            "color": "blue",
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "413": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "349",
            "distance": "412"
          },
          "angle": -1.5707963267949,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "414": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": -99,
              "y": 306
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "3 cm",
          "label": "dist",
          "style": {
            "hidden": true,
            "color": "rgb(192,133,74)",
            "precision": 1,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "415": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "356",
            "distance": "414"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "selectable": false,
            "color": "rgb(217,185,152)",
            "width": 1
          }
        },
        "416": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "source": "364",
            "distance": "414"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "selectable": false,
            "opacity": 1,
            "layerOrder": 5
          }
        },
        "417": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "357",
            "distance": "414"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "selectable": false,
            "color": "rgb(217,185,152)",
            "width": 1
          }
        },
        "418": {
          "kind": "ArcInterior",
          "genus": "ArcSector",
          "parents": {
            "source": "360",
            "distance": "414"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "selectable": false,
            "opacity": 1,
            "layerOrder": 6
          }
        },
        "419": {
          "kind": "ArcInterior",
          "genus": "ArcSector",
          "parents": {
            "source": "363",
            "distance": "414"
          },
          "angle": -1.5707963267949,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "opacity": 1,
            "layerOrder": 7
          }
        },
        "420": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "356",
            "distance": "414"
          },
          "angle": -1.5707963267949,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "rgb(217,185,152)",
            "width": 1
          }
        },
        "421": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "source": "364",
            "distance": "414"
          },
          "angle": -1.5707963267949,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "opacity": 1,
            "layerOrder": 8
          }
        },
        "422": {
          "kind": "ArcInterior",
          "genus": "ArcSector",
          "parents": {
            "source": "360",
            "distance": "414"
          },
          "angle": -1.5707963267949,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "opacity": 1,
            "layerOrder": 9
          }
        },
        "423": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "357",
            "distance": "414"
          },
          "angle": -1.5707963267949,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "rgb(217,185,152)",
            "width": 1
          }
        },
        "424": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "source": "416",
            "distance": "414"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "selectable": false,
            "opacity": 1,
            "layerOrder": 10
          }
        },
        "425": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "417",
            "distance": "414"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "selectable": false,
            "color": "rgb(217,185,152)",
            "width": 1
          }
        },
        "426": {
          "kind": "ArcInterior",
          "genus": "ArcSector",
          "parents": {
            "source": "418",
            "distance": "414"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "selectable": false,
            "opacity": 1,
            "layerOrder": 12
          }
        },
        "427": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "415",
            "distance": "414"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "selectable": false,
            "color": "rgb(217,185,152)",
            "width": 1
          }
        },
        "428": {
          "kind": "ArcInterior",
          "genus": "ArcSector",
          "parents": {
            "source": "363",
            "distance": "414"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "selectable": false,
            "opacity": 1,
            "layerOrder": 4
          }
        },
        "429": {
          "kind": "ArcInterior",
          "genus": "ArcSector",
          "parents": {
            "source": "428",
            "distance": "414"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "selectable": false,
            "opacity": 1,
            "layerOrder": 11
          }
        },
        "430": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 809,
              "y": 760
            }
          },
          "textMFS": "<VL<T'1'>>",
          "style": {
            "hidden": true,
            "font-size": 22,
            "color": "black"
          }
        },
        "431": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 957,
              "y": 186
            }
          },
          "label": "E[4]",
          "style": {
            "hidden": true,
            "color": "blue"
          }
        },
        "432": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 220,
              "y": 186
            }
          },
          "label": "F[3]",
          "style": {
            "hidden": true,
            "color": "blue",
            "label": {
              "showLabel": true,
              "labelOffsetX": -28,
              "labelOffsetY": -13
            }
          }
        },
        "433": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "373"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 809,
              "y": 726
            }
          },
          "textMFS": "<H<T'('><?1xC0001<H<T'\u20130.6'>>><T')'>>",
          "style": {
            "hidden": true
          }
        },
        "434": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 957,
              "y": 186
            }
          },
          "label": "G[4]",
          "style": {
            "hidden": true,
            "color": "blue"
          }
        },
        "435": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 220,
              "y": 186
            }
          },
          "label": "I[3]",
          "style": {
            "hidden": true,
            "color": "blue",
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5
            }
          }
        },
        "436": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": -492,
              "y": 640
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1.6 cm",
          "label": "dist+",
          "style": {
            "hidden": true,
            "color": "red",
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "437": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": -492,
              "y": 666
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1.85 cm",
          "label": "dist-",
          "style": {
            "hidden": true,
            "color": "red",
            "precision": 1,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "438": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 957,
              "y": 186
            }
          },
          "label": "F[4]",
          "style": {
            "hidden": true,
            "color": "blue"
          }
        },
        "439": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 220,
              "y": 186
            }
          },
          "label": "M[3]",
          "style": {
            "hidden": true,
            "color": "blue",
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5
            }
          }
        },
        "440": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "373"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": -492,
              "y": 692
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(.5+sgn(@0)))/2",
          "label": "base<0",
          "style": {
            "hidden": true,
            "color": "red",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "441": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "440"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": -492,
              "y": 712
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "label": "\u00ac(base<0)",
          "style": {
            "hidden": true,
            "color": "red",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "442": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "62"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": -740,
              "y": 629
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*2",
          "style": {
            "hidden": true,
            "font-size": 11,
            "color": "blue",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "443": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "92",
            "distance": "442"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(0,0,252)"
          }
        },
        "444": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "443",
            "p1": "92"
          },
          "constraint": "Segment",
          "style": {
            "selectable": false,
            "color": "blue",
            "width": 1
          }
        },
        "445": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "94",
            "distance": "442"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(0,0,252)"
          }
        },
        "446": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "445",
            "p1": "92"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "color": "rgb(0,126,0)",
            "width": 1
          }
        },
        "447": {
          "kind": "Point",
          "genus": "Midpoint",
          "parents": {
            "path": "446"
          },
          "constraint": "Midpoint",
          "style": {
            "hidden": true,
            "color": "rgb(0,0,252)"
          }
        },
        "448": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "447",
            "distance": "442"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(0,0,252)"
          }
        },
        "449": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "448",
            "text": "64"
          },
          "constraint": "Pegged",
          "style": {
            "selectable": false,
            "font-size": 18,
            "font-weight": "bold",
            "color": "blue"
          }
        },
        "450": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "447",
            "text": "63"
          },
          "constraint": "Pegged",
          "style": {
            "selectable": false,
            "font-size": 18,
            "font-weight": "bold",
            "color": "blue"
          }
        },
        "451": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "445",
            "p1": "443"
          },
          "constraint": "Segment",
          "style": {
            "selectable": false,
            "color": "blue",
            "width": 1
          }
        },
        "452": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "445",
            "p1": "94"
          },
          "constraint": "Segment",
          "style": {
            "selectable": false,
            "color": "blue",
            "width": 1
          }
        },
        "453": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "452",
            "distance": "442"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "blue",
            "width": 1
          }
        },
        "454": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "453",
            "distance": "442"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "blue",
            "width": 1
          }
        },
        "455": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "454",
            "distance": "442"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "blue",
            "width": 1
          }
        },
        "456": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "455",
            "distance": "442"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "blue",
            "width": 1
          }
        },
        "457": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "456",
            "distance": "442"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "blue",
            "width": 1
          }
        },
        "458": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "457",
            "distance": "442"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "blue",
            "width": 1
          }
        },
        "459": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "458",
            "distance": "442"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "blue",
            "width": 1
          }
        },
        "460": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "459",
            "distance": "442"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "blue",
            "width": 1
          }
        },
        "461": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "460",
            "distance": "442"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "blue",
            "width": 1
          }
        },
        "462": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "461",
            "distance": "442"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "blue",
            "width": 1
          }
        },
        "463": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "462",
            "distance": "442"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "blue",
            "width": 1
          }
        },
        "464": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "463",
            "distance": "442"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "blue",
            "width": 1
          }
        },
        "465": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "464",
            "distance": "442"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "blue",
            "width": 1
          }
        },
        "466": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "465",
            "distance": "442"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "blue",
            "width": 1
          }
        },
        "467": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "466",
            "distance": "442"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "blue",
            "width": 1
          }
        },
        "468": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "467",
            "distance": "442"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "blue",
            "width": 1
          }
        },
        "469": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "468",
            "distance": "442"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "blue",
            "width": 1
          }
        },
        "470": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "469",
            "distance": "442"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "blue",
            "width": 1
          }
        },
        "471": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "470",
            "distance": "60"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "selectable": false,
            "color": "blue",
            "width": 1
          }
        },
        "472": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "471",
            "distance": "60"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "selectable": false,
            "color": "blue",
            "width": 1
          }
        },
        "473": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "448",
            "distance": "442"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(0,0,252)"
          }
        },
        "474": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "473",
            "distance": "442"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(0,0,252)"
          }
        },
        "475": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "474",
            "text": "66"
          },
          "constraint": "Pegged",
          "style": {
            "selectable": false,
            "font-size": 18,
            "font-weight": "bold",
            "color": "blue"
          }
        },
        "476": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "473",
            "text": "65"
          },
          "constraint": "Pegged",
          "style": {
            "selectable": false,
            "font-size": 18,
            "font-weight": "bold",
            "color": "blue"
          }
        },
        "477": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "474",
            "distance": "442"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(0,0,252)"
          }
        },
        "478": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "477",
            "distance": "442"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(0,0,252)"
          }
        },
        "479": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "478",
            "text": "68"
          },
          "constraint": "Pegged",
          "style": {
            "selectable": false,
            "font-size": 18,
            "font-weight": "bold",
            "color": "blue"
          }
        },
        "480": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "477",
            "text": "67"
          },
          "constraint": "Pegged",
          "style": {
            "selectable": false,
            "font-size": 18,
            "font-weight": "bold",
            "color": "blue"
          }
        },
        "481": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "478",
            "distance": "442"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(0,0,252)"
          }
        },
        "482": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "481",
            "distance": "442"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(0,0,252)"
          }
        },
        "483": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "482",
            "text": "70"
          },
          "constraint": "Pegged",
          "style": {
            "selectable": false,
            "font-size": 18,
            "font-weight": "bold",
            "color": "blue"
          }
        },
        "484": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "481",
            "text": "69"
          },
          "constraint": "Pegged",
          "style": {
            "selectable": false,
            "font-size": 18,
            "font-weight": "bold",
            "color": "blue"
          }
        },
        "485": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "482",
            "distance": "442"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(0,0,252)"
          }
        },
        "486": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "485",
            "distance": "442"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(0,0,252)"
          }
        },
        "487": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "486",
            "text": "72"
          },
          "constraint": "Pegged",
          "style": {
            "selectable": false,
            "font-size": 18,
            "font-weight": "bold",
            "color": "blue"
          }
        },
        "488": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "485",
            "text": "71"
          },
          "constraint": "Pegged",
          "style": {
            "selectable": false,
            "font-size": 18,
            "font-weight": "bold",
            "color": "blue"
          }
        },
        "489": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "486",
            "distance": "442"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(0,0,252)"
          }
        },
        "490": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "489",
            "distance": "442"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(0,0,252)"
          }
        },
        "491": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "490",
            "text": "73"
          },
          "constraint": "Pegged",
          "style": {
            "selectable": false,
            "font-size": 18,
            "font-weight": "bold",
            "color": "blue"
          }
        },
        "492": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "489",
            "text": "77"
          },
          "constraint": "Pegged",
          "style": {
            "selectable": false,
            "font-size": 18,
            "font-weight": "bold",
            "color": "blue"
          }
        },
        "493": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "490",
            "distance": "442"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(0,0,252)"
          }
        },
        "494": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "493",
            "distance": "442"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(0,0,252)"
          }
        },
        "495": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "494",
            "text": "75"
          },
          "constraint": "Pegged",
          "style": {
            "selectable": false,
            "font-size": 18,
            "font-weight": "bold",
            "color": "blue"
          }
        },
        "496": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "493",
            "text": "74"
          },
          "constraint": "Pegged",
          "style": {
            "selectable": false,
            "font-size": 18,
            "font-weight": "bold",
            "color": "blue"
          }
        },
        "497": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "494",
            "distance": "442"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(0,0,252)"
          }
        },
        "498": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "497",
            "distance": "442"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(0,0,252)"
          }
        },
        "499": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "498",
            "text": "78"
          },
          "constraint": "Pegged",
          "style": {
            "selectable": false,
            "font-size": 18,
            "font-weight": "bold",
            "color": "blue"
          }
        },
        "500": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "497",
            "text": "76"
          },
          "constraint": "Pegged",
          "style": {
            "selectable": false,
            "font-size": 18,
            "font-weight": "bold",
            "color": "blue"
          }
        },
        "501": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "498",
            "distance": "442"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(0,0,252)"
          }
        },
        "502": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "501",
            "distance": "442"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(0,0,252)"
          }
        },
        "503": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "502",
            "text": "80"
          },
          "constraint": "Pegged",
          "style": {
            "selectable": false,
            "font-size": 18,
            "font-weight": "bold",
            "color": "blue"
          }
        },
        "504": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "502",
            "distance": "60"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(0,0,252)"
          }
        },
        "505": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "504",
            "text": "81"
          },
          "constraint": "Pegged",
          "style": {
            "selectable": false,
            "font-size": 18,
            "color": "blue"
          }
        },
        "506": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "501",
            "text": "79"
          },
          "constraint": "Pegged",
          "style": {
            "selectable": false,
            "font-size": 18,
            "font-weight": "bold",
            "color": "blue"
          }
        },
        "507": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "451",
            "distance": "442"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "blue",
            "width": 1
          }
        },
        "508": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "507",
            "distance": "442"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "blue",
            "width": 1
          }
        },
        "509": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "508",
            "distance": "442"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "blue",
            "width": 1
          }
        },
        "510": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "509",
            "distance": "442"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "blue",
            "width": 1
          }
        },
        "511": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "510",
            "distance": "442"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "blue",
            "width": 1
          }
        },
        "512": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "511",
            "distance": "442"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "blue",
            "width": 1
          }
        },
        "513": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "512",
            "distance": "442"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "blue",
            "width": 1
          }
        },
        "514": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "513",
            "distance": "442"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "blue",
            "width": 1
          }
        },
        "515": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "514",
            "distance": "442"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "blue",
            "width": 1
          }
        },
        "516": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "515",
            "distance": "442"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "blue",
            "width": 1
          }
        },
        "517": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "516",
            "distance": "442"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "blue",
            "width": 1
          }
        },
        "518": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "517",
            "distance": "442"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "blue",
            "width": 1
          }
        },
        "519": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "518",
            "distance": "442"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "blue",
            "width": 1
          }
        },
        "520": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "519",
            "distance": "442"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "blue",
            "width": 1
          }
        },
        "521": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "520",
            "distance": "442"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "blue",
            "width": 1
          }
        },
        "522": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "521",
            "distance": "442"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "blue",
            "width": 1
          }
        },
        "523": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "522",
            "distance": "442"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "blue",
            "width": 1
          }
        },
        "524": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "523",
            "distance": "442"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "blue",
            "width": 1
          }
        },
        "525": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "524",
            "distance": "60"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "selectable": false,
            "color": "blue",
            "width": 1
          }
        },
        "526": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "525",
            "distance": "60"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "selectable": false,
            "color": "blue",
            "width": 1
          }
        },
        "527": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "444",
            "distance": "442"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "blue",
            "width": 1
          }
        },
        "528": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "527",
            "distance": "442"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "blue",
            "width": 1
          }
        },
        "529": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "528",
            "distance": "442"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "blue",
            "width": 1
          }
        },
        "530": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "529",
            "distance": "442"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "blue",
            "width": 1
          }
        },
        "531": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "530",
            "distance": "442"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "blue",
            "width": 1
          }
        },
        "532": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "531",
            "distance": "442"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "blue",
            "width": 1
          }
        },
        "533": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "532",
            "distance": "442"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "blue",
            "width": 1
          }
        },
        "534": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "533",
            "distance": "442"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "blue",
            "width": 1
          }
        },
        "535": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "534",
            "distance": "442"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "blue",
            "width": 1
          }
        },
        "536": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "535",
            "distance": "442"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "blue",
            "width": 1
          }
        },
        "537": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "536",
            "distance": "442"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "blue",
            "width": 1
          }
        },
        "538": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "537",
            "distance": "442"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "blue",
            "width": 1
          }
        },
        "539": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "538",
            "distance": "442"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "blue",
            "width": 1
          }
        },
        "540": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "539",
            "distance": "442"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "blue",
            "width": 1
          }
        },
        "541": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "540",
            "distance": "442"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "blue",
            "width": 1
          }
        },
        "542": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "541",
            "distance": "442"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "blue",
            "width": 1
          }
        },
        "543": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "542",
            "distance": "442"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "blue",
            "width": 1
          }
        },
        "544": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "543",
            "distance": "442"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "blue",
            "width": 1
          }
        },
        "545": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "544",
            "distance": "60"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "selectable": false,
            "color": "blue",
            "width": 1
          }
        },
        "546": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "545",
            "distance": "60"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "selectable": false,
            "color": "blue",
            "width": 1
          }
        },
        "547": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "95",
            "distance": "442"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "blue",
            "width": 1
          }
        },
        "548": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "547",
            "distance": "442"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "blue",
            "width": 1
          }
        },
        "549": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "548",
            "distance": "442"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "blue",
            "width": 1
          }
        },
        "550": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "440",
            "1": "437",
            "2": "441",
            "3": "436"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": -492,
              "y": 732
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1+@2*@3",
          "label": "m[20]",
          "style": {
            "hidden": true,
            "color": "red",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "551": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "332",
            "1": "550"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": -492,
              "y": 752
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(@0+1)*@1/2",
          "style": {
            "hidden": true,
            "color": "red",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "552": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "332",
            "1": "550"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": -492,
              "y": 799
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(@0+1)*@1/2",
          "style": {
            "hidden": true,
            "color": "red",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "553": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "345"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": -492,
              "y": 846
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/2",
          "style": {
            "hidden": true,
            "color": "red",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "554": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "344"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": -492,
              "y": 912
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "label": "\u00ac(m<=0)",
          "style": {
            "hidden": true,
            "color": "red",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "555": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "554"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": -492,
              "y": 932
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1 cm/@0",
          "style": {
            "hidden": true,
            "color": "red",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "556": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "373",
            "1": "331"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 441,
              "y": 500
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0^@1",
          "label": "m[19]",
          "style": {
            "hidden": true,
            "color": "red",
            "precision": 5,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "557": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "394",
            "1": "331"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 272,
              "y": 501
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0^@1",
          "label": "m[19]",
          "style": {
            "hidden": true,
            "color": "blue",
            "precision": 5,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "558": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "373",
            "1": "332"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 436,
              "y": 472
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0^@1",
          "label": "m[19]",
          "style": {
            "hidden": true,
            "color": "red",
            "precision": 5,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "559": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "394",
            "1": "332"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 273,
              "y": 473
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0^@1",
          "label": "m[19]",
          "style": {
            "hidden": true,
            "color": "blue",
            "precision": 5,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "560": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "394",
            "1": "331"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 639,
              "y": 623
            }
          },
          "textMFS": "<VL<H<+<H<T'('><?1xC0001<H<T'6'>>><T')'>><?1xC0002<H<T'5'>>>><T' ='>>>",
          "style": {
            "hidden": true,
            "font-size": 22,
            "color": "blue"
          }
        },
        "561": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "373",
            "1": "331"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 715,
              "y": 857
            }
          },
          "textMFS": "<H<T'('><?1xC0001<H<T'\u20130.6'>>><+<T')'><?1xC0002<H<T'5'>>>><T' ='>>",
          "style": {
            "hidden": true,
            "font-size": 22
          }
        },
        "562": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 882,
              "y": 682
            }
          },
          "textMFS": "<VL<T'1'>>",
          "style": {
            "hidden": true,
            "font-size": 19,
            "color": "black"
          }
        },
        "563": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "559"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 883,
              "y": 763
            }
          },
          "textMFS": "<VL<?xC0001>>",
          "style": {
            "hidden": true,
            "font-size": 19,
            "color": "black"
          }
        },
        "564": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "394",
            "1": "332"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 443,
              "y": 530
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0^@1",
          "label": "m[18]",
          "style": {
            "hidden": true,
            "color": "blue",
            "precision": 0,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "565": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "347"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": -939,
              "y": 1060
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "2.6 cm/@0",
          "label": "m[19]",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "566": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": -939,
              "y": 1102
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "0.5 cm",
          "label": "dist[3]",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "567": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": -939,
              "y": 1129
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1.4 cm",
          "label": "dist[4]",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "568": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": -939,
              "y": 1156
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "0.5000000000000001 cm",
          "label": "dist[5]",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "569": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": -939,
              "y": 1183
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "0.8 cm",
          "label": "dist[6]",
          "style": {
            "hidden": true,
            "precision": 1,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "570": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 668,
              "y": 665
            }
          },
          "textMFS": "<T'='>",
          "style": {
            "hidden": true,
            "font-size": 22,
            "color": "blue"
          }
        },
        "571": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "564"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 879,
              "y": 714
            }
          },
          "textMFS": "<VL<?1xC0001<H<T'1296'>>>>",
          "style": {
            "hidden": true,
            "font-size": 19,
            "color": "black"
          }
        },
        "572": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "557"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 666,
              "y": 726
            }
          },
          "textMFS": "<VL<H<T'= - '><?xC0001>>>",
          "style": {
            "hidden": true,
            "font-size": 22,
            "color": "blue"
          }
        },
        "573": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "557"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 666,
              "y": 762
            }
          },
          "textMFS": "<VL<H<T'= '><?1xC0001<H<T'7776.00000'>>>>>",
          "style": {
            "hidden": true,
            "font-size": 22,
            "color": "blue"
          }
        },
        "574": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "557"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": -939,
              "y": 1345
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(.5+sgn(@0)))/2",
          "label": "base^m<0",
          "style": {
            "hidden": true,
            "color": "blue",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "575": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": -939,
              "y": 1237
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "2.7 cm",
          "label": "dist[8]",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "576": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "574"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": -794,
              "y": 1334
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "label": "\u00ac(m[19]<0)",
          "style": {
            "hidden": true,
            "color": "blue",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "577": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "251"
          },
          "geom": {
            "loc": {
              "x": 764,
              "y": 493
            }
          },
          "label": "Hide Text",
          "style": {
            "hidden": true
          },
          "constraint": "ActionButtonToggleHideShow",
          "messages": [
            "Hide Text",
            "Show Text"
          ],
          "shouldAutogenerateLabel": true,
          "fade": true
        },
        "578": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "394"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": -939,
              "y": 1365
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "label": "base=0",
          "style": {
            "hidden": true,
            "color": "blue",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "579": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "578"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": -939,
              "y": 1385
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "label": "\u00ac(base=0)",
          "style": {
            "hidden": true,
            "color": "blue",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "580": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "574",
            "1": "579"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": -939,
              "y": 1405
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(sgn(@0*@1))",
          "label": "(m[19]<0)^(\u00ac(base=0))",
          "style": {
            "hidden": true,
            "color": "blue",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "581": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "575",
            "1": "580"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": -795,
              "y": 1270
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/@1",
          "label": "m[19]",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "582": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 896,
              "y": 419
            }
          },
          "style": {
            "hidden": true,
            "color": "purple"
          }
        },
        "583": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "582",
            "text": "572"
          },
          "constraint": "Pegged",
          "style": {
            "hidden": true,
            "font-size": 22,
            "color": "blue"
          }
        },
        "584": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "576",
            "1": "579"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": -794,
              "y": 1359
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(sgn(@0*@1))",
          "label": "(\u00ac(m[19]<0))^(\u00ac(base=0))",
          "style": {
            "hidden": true,
            "color": "blue",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "585": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "575",
            "1": "584"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": -794,
              "y": 1384
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/@1",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "586": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "331"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 56,
              "y": 707
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "label": "m=0",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "587": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "586"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 56,
              "y": 727
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "label": "\u00ac(m=0)",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "588": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "332",
            "1": "399",
            "2": "587"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": -931,
              "y": 967
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(@0+1)*@1/2/@2",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "589": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "587"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": -939,
              "y": 1210
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "0.6 cm/@0",
          "label": "dist[7]",
          "style": {
            "hidden": true,
            "precision": 1,
            "nameOrigin": "namedFromLabel"
          }
        },
        "590": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 746,
              "y": 602
            }
          },
          "style": {
            "hidden": true,
            "color": "rgb(255,255,10)"
          }
        },
        "591": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "590",
            "text": "570"
          },
          "constraint": "Pegged",
          "style": {
            "hidden": true,
            "font-size": 22,
            "color": "blue"
          }
        },
        "592": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": -939,
              "y": 1264
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1 cm",
          "label": "dist[9]",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "593": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "394",
            "1": "331"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 278,
              "y": 530
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0^@1",
          "label": "m[19]",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "594": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "593"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 666,
              "y": 690
            }
          },
          "textMFS": "<VL<H<T'= '><?1xC0001<H<T'7776'>>>>>",
          "style": {
            "hidden": true,
            "font-size": 22,
            "color": "blue"
          }
        },
        "595": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "331"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 56,
              "y": 747
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1+sgn(-.5+sgn(@0)))/2",
          "label": "m>0",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "596": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "595"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 86,
              "y": 471
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1.3 cm/@0",
          "label": "dist[10]",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "597": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 247,
              "y": 598
            }
          },
          "textMFS": "<VL<T'exponent is 0 and base not zero'>>",
          "style": {
            "hidden": true,
            "font-size": 10,
            "color": "black"
          }
        },
        "598": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "579",
            "1": "586"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 247,
              "y": 618
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(sgn(@0*@1))",
          "label": "(\u00ac(base=0))^(m=0)",
          "style": {
            "hidden": true,
            "color": "blue",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "599": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 247,
              "y": 638
            }
          },
          "textMFS": "<VL<T'exponent is 0 and base is zero'>>",
          "style": {
            "hidden": true,
            "font-size": 10,
            "color": "black"
          }
        },
        "600": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "578",
            "1": "586"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 247,
              "y": 658
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(sgn(@0*@1))",
          "label": "(base=0)^(m=0)",
          "style": {
            "hidden": true,
            "color": "blue",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "601": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 247,
              "y": 678
            }
          },
          "textMFS": "<VL<T'exponent is negative and base is zezro'>>",
          "style": {
            "hidden": true,
            "font-size": 10,
            "color": "black"
          }
        },
        "602": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "331"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 56,
              "y": 767
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(.5+sgn(@0)))/2",
          "label": "m<0",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "603": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "578",
            "1": "602"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 247,
              "y": 698
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(sgn(@0*@1))",
          "label": "(base=0)^(m<0)",
          "style": {
            "hidden": true,
            "color": "blue",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "604": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "593"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": -939,
              "y": 1321
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1+sgn(-.5+sgn(@0)))/2",
          "label": "base^m>0",
          "style": {
            "hidden": true,
            "color": "blue",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "605": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 247,
              "y": 718
            }
          },
          "textMFS": "<VL<T'exponent is negative and power is positive'>>",
          "style": {
            "hidden": true,
            "font-size": 10,
            "color": "black"
          }
        },
        "606": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "604",
            "1": "602"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 247,
              "y": 738
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(sgn(@0*@1))",
          "label": "(base^m>0)^(m<0)",
          "style": {
            "hidden": true,
            "color": "blue",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "607": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 247,
              "y": 757
            }
          },
          "textMFS": "<VL<T'power is positive'>>",
          "style": {
            "hidden": true,
            "font-size": 10,
            "color": "black"
          }
        },
        "608": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "604"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 247,
              "y": 776
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0",
          "style": {
            "hidden": true,
            "color": "blue",
            "precision": 0,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "609": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": -254,
              "y": 134
            }
          },
          "textMFS": "<VL<T'add 1/x^n'>>",
          "style": {
            "hidden": true,
            "font-size": 10,
            "color": "black"
          }
        },
        "610": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 596,
              "y": 692
            }
          },
          "textMFS": "<VL<T'1'>>",
          "style": {
            "hidden": true,
            "font-size": 22,
            "color": "blue"
          }
        },
        "611": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": -1473,
              "y": 1480
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1 cm",
          "label": "dist[11]",
          "style": {
            "hidden": true,
            "color": "blue",
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "612": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "602"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": -788,
              "y": 1104
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "2.5 cm/@0",
          "style": {
            "hidden": true,
            "color": "blue",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "613": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": -788,
              "y": 1146
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1.4 cm",
          "label": "dist[12]",
          "style": {
            "hidden": true,
            "color": "blue",
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "614": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": -788,
              "y": 1173
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "-1 cm",
          "label": "dist[13]",
          "style": {
            "hidden": true,
            "color": "blue",
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "615": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": -788,
              "y": 1200
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "-0.5 cm",
          "label": "dist[14]",
          "style": {
            "hidden": true,
            "color": "blue",
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "616": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "603"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": -576,
              "y": 1272
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "2.5 cm/@0",
          "style": {
            "hidden": true,
            "color": "blue",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "617": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 504,
              "y": 811
            }
          },
          "textMFS": "<VL<T'= undefined'>>",
          "style": {
            "hidden": true,
            "font-size": 22,
            "color": "blue"
          }
        },
        "618": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "598"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": -588,
              "y": 1171
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1.8 cm/@0",
          "style": {
            "hidden": true,
            "color": "blue",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "619": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "598"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": -580,
              "y": 1125
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "-0.1 cm/@0",
          "style": {
            "hidden": true,
            "color": "blue",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "620": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "600"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": -580,
              "y": 1220
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "3.2 cm/@0",
          "style": {
            "hidden": true,
            "color": "blue",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "621": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 459,
              "y": 861
            }
          },
          "textMFS": "<VL<T'undefined'>>",
          "style": {
            "hidden": true,
            "font-size": 22,
            "color": "blue"
          }
        },
        "622": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": -775,
              "y": 1227
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1.6 cm",
          "label": "dist[15]",
          "style": {
            "hidden": true,
            "color": "blue",
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "623": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "595"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": -571,
              "y": 1325
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "0.1 cm/@0",
          "style": {
            "hidden": true,
            "color": "blue",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "624": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 81,
              "y": 332
            }
          },
          "label": "W[4]",
          "style": {
            "hidden": true,
            "color": "rgb(255,255,10)"
          }
        },
        "625": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "624",
            "text": "561"
          },
          "constraint": "Pegged",
          "style": {
            "font-size": 22
          }
        },
        "626": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 924,
              "y": 877
            }
          },
          "textMFS": "<VL<T'1'>>",
          "style": {
            "hidden": true,
            "font-size": 22
          }
        },
        "627": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": -119,
              "y": 687
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1.2 cm",
          "label": "dist[20]",
          "style": {
            "hidden": true,
            "color": "red",
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "628": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "602"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": -119,
              "y": 756
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "-0.1 cm/@0",
          "style": {
            "hidden": true,
            "color": "red",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "629": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "602"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": -119,
              "y": 798
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "-0.2 cm/@0",
          "style": {
            "hidden": true,
            "color": "red",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "630": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "602"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": -119,
              "y": 840
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "-1 cm/@0",
          "style": {
            "hidden": true,
            "color": "red",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "631": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "602"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": -119,
              "y": 882
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1.6 cm/@0",
          "style": {
            "hidden": true,
            "color": "red",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "632": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "602"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": -119,
              "y": 924
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "0.6 cm/@0",
          "style": {
            "hidden": true,
            "color": "red",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "633": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 527,
              "y": 936
            }
          },
          "textMFS": "<VL<T'1'>>",
          "style": {
            "hidden": true,
            "font-size": 22
          }
        },
        "634": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "558"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 506,
              "y": 1030
            }
          },
          "textMFS": "<VL<?1xC0001<H<T'0.12960'>>>>",
          "style": {
            "hidden": true,
            "font-size": 22
          }
        },
        "635": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "602"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": -119,
              "y": 966
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "2 cm/@0",
          "style": {
            "hidden": true,
            "color": "red",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "636": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "602"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": -119,
              "y": 1008
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "2.5 cm/@0",
          "style": {
            "hidden": true,
            "color": "red",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "637": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "556"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 630,
              "y": 931
            }
          },
          "textMFS": "<VL<H<T'= '><?1xC0001<H<T'\u20130.07776'>>>>>",
          "style": {
            "hidden": true,
            "font-size": 22
          }
        },
        "638": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "373"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 89,
              "y": 562
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "label": "base=0",
          "style": {
            "hidden": true,
            "color": "rgb(252,1,7)",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "639": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "638"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 89,
              "y": 581
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "label": "\u00ac(base=0)",
          "style": {
            "hidden": true,
            "color": "rgb(252,1,7)",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "640": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "602",
            "1": "639"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 89,
              "y": 600
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(sgn(@0*@1))",
          "label": "(m<0)^(\u00ac(base=0))",
          "style": {
            "hidden": true,
            "color": "rgb(252,1,7)",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "641": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "602"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": -119,
              "y": 714
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "3 cm/@0",
          "style": {
            "hidden": true,
            "color": "red",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "642": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "624",
            "measureX": "641",
            "measureY": "628"
          },
          "constraint": "TranslateMeasureXMeasureY",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(255,255,10)"
          }
        },
        "643": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "642",
            "distance": "631"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(255,255,10)"
          }
        },
        "644": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "643",
            "text": "570"
          },
          "constraint": "Pegged",
          "style": {
            "font-size": 22
          }
        },
        "645": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "642",
            "distance": "566"
          },
          "angle": -1.5707963267949,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(255,255,10)"
          }
        },
        "646": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "645",
            "text": "626"
          },
          "constraint": "Pegged",
          "style": {
            "font-size": 22
          }
        },
        "647": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "645",
            "center": "642"
          },
          "angle": 3.1415926535897865,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(255,255,10)"
          }
        },
        "648": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "642",
            "distance": "627"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(255,255,10)"
          }
        },
        "649": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "648",
            "p1": "642"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "650": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "649",
            "center": "642"
          },
          "angle": 3.1415926535897865,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "width": 1
          }
        },
        "651": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "586",
            "1": "602"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": -104,
              "y": 609
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "sgn(abs(sgn(@0))+abs(sgn(@1)))",
          "label": "(m=0)V(m<0)",
          "style": {
            "hidden": true,
            "color": "rgb(252,1,7)",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "652": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "638",
            "1": "651"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 89,
              "y": 631
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(sgn(@0*@1))",
          "label": "(base=0)^((m<0)v(m=0))",
          "style": {
            "hidden": true,
            "color": "rgb(252,1,7)",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "653": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "640"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": -114,
              "y": 1050
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "5.2 cm/@0",
          "style": {
            "hidden": true,
            "color": "red",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "654": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "652"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 46,
              "y": 804
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "4.5 cm/@0",
          "style": {
            "hidden": true,
            "color": "red",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "655": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "638",
            "1": "586"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 89,
              "y": 650
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(sgn(@0*@1))",
          "label": "(base=0)^(m=0)",
          "style": {
            "hidden": true,
            "color": "rgb(252,1,7)",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "656": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "655"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 46,
              "y": 846
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "3.4 cm/@0",
          "style": {
            "hidden": true,
            "color": "red",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "657": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "624",
            "distance": "656"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(255,255,10)"
          }
        },
        "658": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "657",
            "text": "621"
          },
          "constraint": "Pegged",
          "style": {
            "font-size": 22
          }
        },
        "659": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {},
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 46,
              "y": 888
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "2.4 cm/1",
          "label": "t[10]",
          "style": {
            "hidden": true,
            "color": "red",
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "660": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "556"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 498,
              "y": 607
            }
          },
          "textMFS": "<VL<H<T'= '><?1xC0001<H<T'\u20130.07776'>>>>>",
          "style": {
            "hidden": true,
            "font-size": 22
          }
        },
        "661": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "595"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 31,
              "y": 918
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "0.8 cm/@0",
          "style": {
            "hidden": true,
            "color": "red",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "662": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "595"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 31,
              "y": 960
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "-0.1 cm/@0",
          "style": {
            "hidden": true,
            "color": "red",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "663": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "624",
            "measureX": "661",
            "measureY": "662"
          },
          "constraint": "TranslateMeasureXMeasureY",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(255,255,10)"
          }
        },
        "664": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "663",
            "distance": "550"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(255,255,10)"
          }
        },
        "665": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "664",
            "distance": "552"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(255,255,10)"
          }
        },
        "666": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "665",
            "distance": "551"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(255,255,10)"
          }
        },
        "667": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "666",
            "distance": "659"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(255,255,10)"
          }
        },
        "668": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "667",
            "text": "660"
          },
          "constraint": "Pegged",
          "style": {
            "font-size": 22
          }
        },
        "669": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "664",
            "text": "433"
          },
          "constraint": "Pegged"
        },
        "670": {
          "kind": "Map",
          "genus": "IterateMap",
          "parents": {
            "0": "664",
            "1": "669",
            "preimage0": "663",
            "map0image0": "664",
            "depth": "332"
          },
          "constraint": "IterateMapByParametricDepth",
          "rerandomizePointsOnPaths": false,
          "finalIterationOnly": false
        },
        "671": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "669",
            "map": "670"
          },
          "constraint": "IterateImage",
          "style": {
            "color": "red"
          }
        },
        "672": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "639",
            "1": "586"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 89,
              "y": 669
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(sgn(@0*@1))",
          "label": "(\u00ac(base=0))^(m=0)",
          "style": {
            "hidden": true,
            "color": "rgb(252,1,7)",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "673": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "672"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 167,
              "y": 901
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "2 cm/@0",
          "style": {
            "hidden": true,
            "color": "red",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "674": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "672"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 167,
              "y": 943
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "-0.1 cm/@0",
          "style": {
            "hidden": true,
            "color": "red",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "675": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "624",
            "measureX": "673",
            "measureY": "674"
          },
          "constraint": "TranslateMeasureXMeasureY",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(255,255,10)"
          }
        },
        "676": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "675",
            "text": "626"
          },
          "constraint": "Pegged",
          "style": {
            "font-size": 22
          }
        },
        "677": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "365",
            "distance": "366"
          },
          "angle": -1.5707963267949,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "label": "W[1]'",
          "style": {
            "hidden": true,
            "color": "blue"
          }
        },
        "678": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "677",
            "distance": "622"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "blue"
          }
        },
        "679": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "677",
            "distance": "620"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "blue"
          }
        },
        "680": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "679",
            "text": "621"
          },
          "constraint": "Pegged",
          "style": {
            "font-size": 22,
            "color": "blue"
          }
        },
        "681": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "677",
            "measureX": "618",
            "measureY": "619"
          },
          "constraint": "TranslateMeasureXMeasureY",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "blue"
          }
        },
        "682": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "681",
            "text": "610"
          },
          "constraint": "Pegged",
          "style": {
            "font-size": 22,
            "color": "blue"
          }
        },
        "683": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "677",
            "distance": "612"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "blue"
          }
        },
        "684": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "683",
            "distance": "613"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "blue"
          }
        },
        "685": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "684",
            "measureX": "614",
            "measureY": "615"
          },
          "constraint": "TranslateMeasureXMeasureY",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "blue"
          }
        },
        "686": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "683",
            "distance": "566"
          },
          "angle": -1.5707963267949,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(255,255,10)"
          }
        },
        "687": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "686",
            "text": "610"
          },
          "constraint": "Pegged",
          "style": {
            "font-size": 22,
            "color": "blue"
          }
        },
        "688": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "686",
            "center": "683"
          },
          "angle": 3.1415926535897865,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(255,255,10)"
          }
        },
        "689": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "683",
            "distance": "611"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(255,255,10)"
          }
        },
        "690": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "689",
            "p1": "683"
          },
          "constraint": "Segment",
          "style": {
            "color": "blue",
            "width": 1
          }
        },
        "691": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "690",
            "center": "683"
          },
          "angle": 3.1415926535897865,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "color": "blue",
            "width": 1
          }
        },
        "692": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "677",
            "text": "560"
          },
          "constraint": "Pegged",
          "style": {
            "font-size": 22,
            "color": "blue"
          }
        },
        "693": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "677",
            "distance": "366"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "blue"
          }
        },
        "694": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "693",
            "distance": "412"
          },
          "angle": -1.5707963267949,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "695": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "365"
          },
          "geom": {
            "loc": {
              "x": -319,
              "y": 38
            }
          },
          "label": "Show Point W[1]",
          "style": {
            "hidden": true,
            "color": "red",
            "label": {
              "color": "purple"
            }
          },
          "constraint": "ActionButtonToggleHideShow",
          "messages": [
            "Hide Point W[1]",
            "Show Point W[1]"
          ],
          "shouldAutogenerateLabel": true
        },
        "696": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "0": "338",
            "1": "335",
            "2": "334",
            "3": "337"
          },
          "constraint": "PolygonFromPoints",
          "latentVisibility": true,
          "style": {
            "color": "rgb(160,160,160)",
            "layerOrder": 0
          }
        },
        "697": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "source": "696",
            "distance": "581"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(160,160,160)",
            "layerOrder": 14
          }
        },
        "698": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "392",
            "1": "381",
            "2": "696"
          },
          "geom": {
            "loc": {
              "x": 901,
              "y": -27
            }
          },
          "label": "Show Quadrilaterals",
          "style": {
            "hidden": true,
            "color": "red",
            "label": {
              "font-size": 12,
              "color": "purple"
            }
          },
          "constraint": "ActionButtonShow",
          "messages": [
            "Show Quadrilaterals",
            "Hide Quadrilaterals"
          ],
          "shouldAutogenerateLabel": true
        },
        "699": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "source": "696",
            "distance": "585"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(160,160,160)",
            "layerOrder": 13
          }
        },
        "700": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "394"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 243,
              "y": 426
            }
          },
          "textMFS": "<VL<H<T'('><?1xC0001<H<T'6'>>><T')'>>>",
          "style": {
            "hidden": true,
            "font-size": 22,
            "color": "blue"
          }
        },
        "701": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 620,
              "y": 461
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1.4 cm",
          "label": "t[17]",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "702": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "685",
            "distance": "701"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "blue"
          }
        },
        "703": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "702",
            "distance": "411"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "green"
          }
        },
        "704": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "703",
            "distance": "345"
          },
          "angle": -1.5707963267949,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "green"
          }
        },
        "705": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "704",
            "text": "430"
          },
          "constraint": "Pegged",
          "style": {
            "font-size": 22,
            "color": "blue"
          }
        },
        "706": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "704",
            "p1": "703"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "color": "black",
            "width": 1
          }
        },
        "707": {
          "kind": "Point",
          "genus": "Midpoint",
          "parents": {
            "path": "706"
          },
          "constraint": "Midpoint",
          "label": "L[4]",
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "708": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "707"
          },
          "angle": -1.5707963267949,
          "distance": 28.346456692913385,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "709": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "707",
            "distance": "588"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(252,1,7)"
          }
        },
        "710": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "709",
            "distance": "569"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(252,1,7)"
          }
        },
        "711": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "710",
            "text": "570"
          },
          "constraint": "Pegged",
          "style": {
            "font-size": 22,
            "color": "blue"
          }
        },
        "712": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "709",
            "distance": "565"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "purple"
          }
        },
        "713": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "712",
            "distance": "567"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "purple"
          }
        },
        "714": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "713",
            "distance": "585"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "purple"
          }
        },
        "715": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "714",
            "text": "573"
          },
          "constraint": "Pegged",
          "style": {
            "font-size": 22,
            "color": "blue"
          }
        },
        "716": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "713",
            "p1": "712"
          },
          "constraint": "Segment",
          "style": {
            "color": "blue",
            "width": 1
          }
        },
        "717": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "716",
            "center": "712"
          },
          "angle": 3.1415926535897865,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "color": "blue",
            "width": 1
          }
        },
        "718": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "713",
            "distance": "616"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "purple"
          }
        },
        "719": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "718",
            "text": "617"
          },
          "constraint": "Pegged",
          "style": {
            "font-size": 22,
            "color": "blue"
          }
        },
        "720": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "713",
            "distance": "581"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "purple"
          }
        },
        "721": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "720",
            "text": "573"
          },
          "constraint": "Pegged",
          "style": {
            "font-size": 22,
            "color": "blue"
          }
        },
        "722": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "712",
            "distance": "568"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "purple"
          }
        },
        "723": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "722",
            "text": "571"
          },
          "constraint": "Pegged",
          "latentVisibility": true,
          "style": {
            "font-size": 22,
            "color": "blue"
          }
        },
        "724": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "723"
          },
          "geom": {
            "loc": {
              "x": 764,
              "y": 513
            }
          },
          "label": "Hide Text",
          "style": {
            "hidden": true
          },
          "constraint": "ActionButtonToggleHideShow",
          "messages": [
            "Hide Text",
            "Show Text"
          ],
          "shouldAutogenerateLabel": true,
          "fade": true
        },
        "725": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "712",
            "distance": "566"
          },
          "angle": -1.5707963267949,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "purple"
          }
        },
        "726": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "725",
            "text": "562"
          },
          "constraint": "Pegged",
          "style": {
            "font-size": 19,
            "color": "blue"
          }
        },
        "727": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "707",
            "distance": "588"
          },
          "angle": 3.1415926535897865,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red"
          }
        },
        "728": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "709",
            "p1": "727"
          },
          "constraint": "Segment",
          "style": {
            "color": "blue",
            "width": 1
          }
        },
        "729": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "702",
            "center": "703"
          },
          "angle": 3.1415926535897865,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "green"
          }
        },
        "730": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "729",
            "distance": "596"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "color": "green"
          }
        },
        "731": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "730",
            "text": "594"
          },
          "constraint": "Pegged",
          "style": {
            "font-size": 22,
            "color": "blue"
          }
        },
        "732": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 630,
              "y": 488
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "-0.65 cm",
          "label": "t[16]",
          "style": {
            "hidden": true,
            "precision": 1,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "733": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "702",
            "distance": "732"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "green"
          }
        },
        "734": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "733",
            "distance": "399"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(255,255,10)"
          }
        },
        "735": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "734",
            "text": "700"
          },
          "constraint": "Pegged",
          "style": {
            "font-size": 22,
            "color": "blue"
          }
        },
        "736": {
          "kind": "Map",
          "genus": "IterateMap",
          "parents": {
            "0": "734",
            "1": "735",
            "preimage0": "733",
            "map0image0": "734",
            "depth": "332"
          },
          "constraint": "IterateMapByParametricDepth",
          "rerandomizePointsOnPaths": false,
          "finalIterationOnly": false
        },
        "737": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "735",
            "map": "736"
          },
          "constraint": "IterateImage",
          "style": {
            "color": "blue"
          }
        },
        "738": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "595"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 630,
              "y": 515
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1 cm/@0",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "739": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "595"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 630,
              "y": 557
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "-0.1 cm/@0",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "740": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "677",
            "measureX": "738",
            "measureY": "739"
          },
          "constraint": "TranslateMeasureXMeasureY",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "blue"
          }
        },
        "741": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "740",
            "distance": "399"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(255,255,10)"
          }
        },
        "742": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "741",
            "text": "396"
          },
          "constraint": "Pegged",
          "style": {
            "font-size": 22,
            "color": "blue"
          }
        },
        "743": {
          "kind": "Map",
          "genus": "IterateMap",
          "parents": {
            "0": "741",
            "1": "742",
            "preimage0": "740",
            "map0image0": "741",
            "depth": "332"
          },
          "constraint": "IterateMapByParametricDepth",
          "rerandomizePointsOnPaths": false,
          "finalIterationOnly": false
        },
        "744": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "742",
            "map": "743"
          },
          "constraint": "IterateImage",
          "style": {
            "color": "blue"
          }
        },
        "745": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "741",
            "distance": "411"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(255,255,10)"
          }
        },
        "746": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "745",
            "distance": "588"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(255,255,10)"
          }
        },
        "747": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "746",
            "distance": "622"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(255,255,10)"
          }
        },
        "748": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "747",
            "text": "594"
          },
          "constraint": "Pegged",
          "style": {
            "font-size": 22,
            "color": "blue"
          }
        },
        "749": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "332"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 897,
              "y": 549
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0+1",
          "style": {
            "hidden": true,
            "precision": 0,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "750": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "373",
            "1": "749"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 475,
              "y": 582
            }
          },
          "textMFS": "<VL<H<T'('><?1xC0001<H<T'\u20130.6'>>><T')'><+<0><?1xC0002<H<T'5'>>>>>>",
          "style": {
            "hidden": true,
            "font-size": 22
          }
        },
        "751": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "647",
            "text": "750"
          },
          "constraint": "Pegged",
          "style": {
            "font-size": 22
          }
        },
        "752": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "394",
            "1": "749"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 580,
              "y": 733
            }
          },
          "textMFS": "<VL<H<T'('><?1xC0001<H<T'6'>>><T')'><+<0><?1xC0002<H<T'5'>>>>>>",
          "style": {
            "hidden": true,
            "font-size": 22,
            "color": "blue"
          }
        },
        "753": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "688",
            "text": "752"
          },
          "constraint": "Pegged",
          "style": {
            "font-size": 22,
            "color": "blue"
          }
        },
        "754": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 887,
              "y": 466
            }
          },
          "textMFS": "<VL<T'='>>",
          "style": {
            "hidden": true,
            "font-size": 22,
            "color": "blue"
          }
        },
        "755": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "684",
            "text": "754"
          },
          "constraint": "Pegged",
          "style": {
            "font-size": 22,
            "color": "blue"
          }
        },
        "756": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "373"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 347,
              "y": 610
            }
          },
          "textMFS": "<H<T'('><?1xC0001<H<T'\u20130.6'>>><T')'>>",
          "style": {
            "hidden": true,
            "font-size": 22
          }
        },
        "757": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 630,
              "y": 599
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "-0.9 cm",
          "label": "t[19]",
          "style": {
            "hidden": true,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "758": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 630,
              "y": 626
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "-0.5 cm",
          "label": "t[20]",
          "style": {
            "hidden": true,
            "precision": 1,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "759": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 630,
              "y": 653
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "0.5 cm",
          "label": "t[21]",
          "style": {
            "hidden": true,
            "precision": 1,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "760": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "647",
            "measureX": "759",
            "measureY": "758"
          },
          "constraint": "TranslateMeasureXMeasureY",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(255,255,10)"
          }
        },
        "761": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "760",
            "distance": "553"
          },
          "angle": -1.5707963267949,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "purple"
          }
        },
        "762": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "761",
            "distance": "550"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "purple"
          }
        },
        "763": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "762",
            "distance": "757"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "purple"
          }
        },
        "764": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "763",
            "distance": "550"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "765": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "764",
            "text": "756"
          },
          "constraint": "Pegged"
        },
        "766": {
          "kind": "Map",
          "genus": "IterateMap",
          "parents": {
            "0": "764",
            "1": "765",
            "preimage0": "763",
            "map0image0": "764",
            "depth": "332"
          },
          "constraint": "IterateMapByParametricDepth",
          "rerandomizePointsOnPaths": false,
          "finalIterationOnly": false
        },
        "767": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "765",
            "map": "766"
          },
          "constraint": "IterateImage",
          "style": {
            "color": "red"
          }
        },
        "768": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "762",
            "distance": "551"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "purple"
          }
        },
        "769": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "768",
            "distance": "366"
          },
          "angle": -1.5707963267949,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "purple"
          }
        },
        "770": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "768",
            "p1": "769"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "color": "black",
            "width": 1
          }
        },
        "771": {
          "kind": "Point",
          "genus": "Midpoint",
          "parents": {
            "path": "770"
          },
          "constraint": "Midpoint",
          "label": "I[4]",
          "style": {
            "hidden": true,
            "color": "purple"
          }
        },
        "772": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "771",
            "distance": "552"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "purple"
          }
        },
        "773": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "772",
            "p1": "771"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "774": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "773",
            "center": "771"
          },
          "angle": 3.1415926535897865,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "width": 1
          }
        },
        "775": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "772",
            "distance": "632"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "purple"
          }
        },
        "776": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "775",
            "text": "570"
          },
          "constraint": "Pegged",
          "style": {
            "font-size": 22
          }
        },
        "777": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "775",
            "distance": "636"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "purple"
          }
        },
        "778": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "777",
            "distance": "654"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "purple"
          }
        },
        "779": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "778",
            "text": "617"
          },
          "constraint": "Pegged",
          "style": {
            "font-size": 22
          }
        },
        "780": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "777",
            "distance": "653"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "purple"
          }
        },
        "781": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "780",
            "text": "637"
          },
          "constraint": "Pegged",
          "style": {
            "font-size": 22
          }
        },
        "782": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "777",
            "distance": "566"
          },
          "angle": -1.5707963267949,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(255,255,10)"
          }
        },
        "783": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "782",
            "center": "777"
          },
          "angle": 3.1415926535897865,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(255,255,10)"
          }
        },
        "784": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "783",
            "text": "634"
          },
          "constraint": "Pegged",
          "style": {
            "font-size": 22
          }
        },
        "785": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "782",
            "text": "633"
          },
          "constraint": "Pegged",
          "style": {
            "font-size": 22
          }
        },
        "786": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "777",
            "distance": "635"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(255,255,10)"
          }
        },
        "787": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "786",
            "center": "777"
          },
          "angle": 3.1415926535897865,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(255,255,10)"
          }
        },
        "788": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "786",
            "p1": "777"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          }
        },
        "789": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "788",
            "center": "777"
          },
          "angle": 3.1415926535897865,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "width": 1
          }
        },
        "790": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "769",
            "text": "430"
          },
          "constraint": "Pegged",
          "style": {
            "font-size": 22,
            "color": "rgb(252,1,7)"
          }
        }
      }
    }
  ]
};