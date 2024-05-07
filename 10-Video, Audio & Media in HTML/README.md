# Video, Audio & Media in HTML

HTML provides elements for embedding various types of media, including video, audio, and images. Here's how you can use them:

**Video (`<video>`):**
- The `<video>` element is used to embed video content in a webpage.
- You specify the video file's source using the `<source>` element within the `<video>` element.
- The browser will automatically choose the appropriate source based on its compatibility with the user's device and browser.
- Example:

```html
<video controls>
    <source src="movie.mp4" type="video/mp4">
    <source src="movie.ogg" type="video/ogg">
    Your browser does not support the video tag.
</video>
```

-The controls attribute adds video controls (play, pause, volume, etc.) to the video player.

**Audio (`<audio>`):**
- The `<audio>` element is used to embed audio content in a webpage.
- Similar to `<video>`, you specify the audio file's source using the `<source>` element within the `<audio>` element.
- Example:

```html
<audio controls>
    <source src="music.mp3" type="audio/mpeg">
    <source src="music.ogg" type="audio/ogg">
    Your browser does not support the audio tag.
</audio>
```

-The controls attribute adds audio controls (play, pause, volume, etc.) to the audio player.

**Media Attributes:**
- Both `<video>` and `<audio>` elements support several attributes for controlling playback and appearance, such as `autoplay`, `loop`, `muted`, `preload`, etc.
- Example:

```html
<video controls autoplay loop muted preload="auto">
    <!-- Source elements here -->
</video>
```

**Fallback Content:**
- It's a good practice to provide fallback content for browsers that do not support the `<video>` or `<audio>` elements.
- This content is displayed inside the element if the browser does not support the media type or cannot render the media.
- Example:

```html
<video controls>
    <source src="movie.mp4" type="video/mp4">
    <source src="movie.ogg" type="video/ogg">
    Your browser does not support the video tag.
</video>
```

**Image (`<img>`):**
- The <img> element is used to embed images in a webpage.
- Example:

```html
<img src="image.jpg" alt="Description of the image">
```

Here's an example HTML code that includes video, audio, and image elements:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Media in HTML Example</title>
</head>
<body>
    <h2>Video Example</h2>
    <video controls autoplay loop muted preload="auto">
        <source src="movie.mp4" type="video/mp4">
        <source src="movie.ogg" type="video/ogg">
        Your browser does not support the video tag.
    </video>

    <h2>Audio Example</h2>
    <audio controls>
        <source src="music.mp3" type="audio/mpeg">
        <source src="music.ogg" type="audio/ogg">
        Your browser does not support the audio tag.
    </audio>

    <h2>Image Example</h2>
    <img src="image.jpg" alt="Description of the image">
</body>
</html>
```

In this example:

- The `<video>` element includes two `<source>` elements with different video formats (mp4 and ogg). The browser will choose the appropriate format based on compatibility.
- The video has controls for play, pause, volume, etc., specified by the controls attribute. It also plays automatically (autoplay), loops indefinitely (loop), and is muted (muted).
- The `<audio>` element includes two `<source>` elements with different audio formats (mp3 and ogg).
- The audio has controls for play, pause, volume, etc., specified by the controls attribute.
- The `<img>` element displays an image with the specified source (src) and alternative text (alt).

These elements allow you to include multimedia content directly in your HTML documents, enhancing the user experience by providing visual and auditory content.