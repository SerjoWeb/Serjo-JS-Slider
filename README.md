# Serjo JS Slider
## Simple slider for any sites

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

An Easy ans simple slider/carousel
Adaptive for all resolutions
Can use for full screen, for several blocks ant etc.

- Pure JavaScript
- ECMA SCRIPT latest
- Html
- Css

Version 1.0
Under development, free license.

## How to use

- Clone or download zip
- Include ``` serjo.js-slider.css ``` in the end of the head tag
- Include ``` serjo.js-slider.js ``` in the end of the body tag
- Between body tag include DOM element ``` <div id="test-slider"> ```
- Initialize Slider

```sh
 1. git clone https://github.com/SerjoWeb/Serjo-JS-Slider.git
 2. <link rel="stylesheet" href="serjo.js-slider.css">
 3. <script src="serjo.js-slider.js"></script>
 4. <div class="test-slider" id="test-slider"></div>
 5. <script>
        const slider = new SerjoJSSlider('#test-slider');
              slider.Init({
                controls: true,
                slides: [
                    {
                        title: 'Test Slide 1',
                        description: 'Test slide description 1',
                        img: 'test.jpg'
                    },
                    {
                        title: 'Test Slide 2',
                        description: 'Test slide description 2',
                        img: 'test.jpg'
                    },
                    {
                        title: 'Test Slide 3',
                        description: 'Test slide description 3',
                        img: 'test.jpg'
                    },
                    {
                        title: 'Test Slide 4',
                        description: 'Test slide description 4',
                        img: 'test.jpg'
                    }
                ]
              });
    </script>
```

## Structure

| Params | Description |
| ------ | ------ |
| ``` controls ``` | ``` true ``` - visible, ``` false ``` - hidden |
| ``` slides ``` | Objects contains params: ``` title, description, img ``` |

## Demo code

```sh
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <link rel="stylesheet" href="serjo.js-slider.css">
</head>
<body>
    <div class="test-slider" id="test-slider"></div>

    <script src="serjo.js-slider.js"></script>
    <script>
        const slider = new SerjoJSSlider('#test-slider');
              slider.Init({
                controls: true,
                slides: [
                    {
                        title: 'Test Slide 1',
                        description: 'Test slide description 1',
                        img: 'test.jpg'
                    },
                    {
                        title: 'Test Slide 2',
                        description: 'Test slide description 2',
                        img: 'test.jpg'
                    },
                    {
                        title: 'Test Slide 3',
                        description: 'Test slide description 3',
                        img: 'test.jpg'
                    },
                    {
                        title: 'Test Slide 4',
                        description: 'Test slide description 4',
                        img: 'test.jpg'
                    }
                ]
              });
    </script>
</body>
</html>
```