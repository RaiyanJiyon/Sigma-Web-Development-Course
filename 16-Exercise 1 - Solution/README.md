# Exercise 1 - Pure HTML Media Player

You are given `12` files. `6 audio` and `6 video`.

Design a website using HTML only which shows these 12 files.

`1.mp3, 2.mp3 ......... 6.mp3`

`1.mp4, 2.mp4 ......... 6.mp4`
 

## Solution - 

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercise 1 - Pure HTML Media Player</title>
</head>
<body>
    <header>
        <h1>Pure HTML Media Player</h1>
    </header>

    <nav>
        <h2>Audio Section</h2>
        <ul>
            <li>1.mp3</li>
            <li>2.mp3</li>
            <li>3.mp3</li>
            <li>4.mp3</li>
            <li>5.mp3</li>
            <li>6.mp3</li>
        </ul>

        <h2>Video Section</h2>
        <ul>
            <li>1.mp4</li>
            <li>2.mp4</li>
            <li>3.mp4</li>
            <li>4.mp4</li>
            <li>5.mp4</li>
            <li>6.mp4</li>
        </ul>
    </nav>

    <main>
        <h2>Audio Section</h2>
        <section>
            <h3>Play Audio 1</h3>
            <audio src="1.mp3" controls>
                Your browser does not support the audio tag.
            </audio>
        </section>
        <section>
            <h3>Play Audio 2</h3>
            <audio src="2.mp3" controls>
                Your browser does not support the audio tag.
            </audio>
        </section>
        <section>
            <h3>Play Audio 3</h3>
            <audio src="3.mp3" controls>
                Your browser does not support the audio tag.
            </audio>
        </section>
        <section>
            <h3>Play Audio 4</h3>
            <audio src="4.mp3" controls>
                Your browser does not support the audio tag.
            </audio>
        </section>
        <section>
            <h3>Play Audio 5</h3>
            <audio src="5.mp3" controls>
                Your browser does not support the audio tag.
            </audio>
        </section>
        <section>
            <h3>Play Audio 6</h3>
            <audio src="6.mp3" controls>
                Your browser does not support the audio tag.
            </audio>
        </section>

        <h2>Video Section</h2>
        <section>
            <h3>Play Video 1</h3>
            <video src="1.mp4" controls>
                Your browser does not support the video tag.
            </video>
        </section>
        <section>
            <h3>Play Video 2</h3>
            <video src="2.mp4" controls>
                Your browser does not support the video tag.
            </video>
        </section>
        <section>
            <h3>Play Video 3</h3>
            <video src="3.mp4" controls>
                Your browser does not support the video tag.
            </video>
        </section>
        <section>
            <h3>Play Video 4</h3>
            <video src="4.mp4" controls>
                Your browser does not support the video tag.
            </video>
        </section>
        <section>
            <h3>Play Video 5</h3>
            <video src="5.mp4" controls>
                Your browser does not support the video tag.
            </video>
        </section>
        <section>
            <h3>Play Video 6</h3>
            <video src="6.mp4" controls>
                Your browser does not support the video tag.
            </video>
        </section>
    </main>

    <aside>
        <h3>Latest Audio and Video</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
    </aside>

    <footer>
        <p>&copy; 2024 My Website. All rights reserved.</p>
    </footer>
</body>
</html>
```

This code includes a header with the title "Pure HTML Media Player," navigation sections for audio and video files, main sections for playing audio and video files, an aside section for additional content, and a footer with copyright information. Each audio and video file is listed and playable with controls.