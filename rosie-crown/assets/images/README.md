# assets/images/

Drop your image files here.

## Hero photo

Add your main artist photo as `hero.jpg` (or any format), then follow the
instructions in `sections/hero.js` to swap out the placeholder visual.

Recommended: at least 1200×1600px portrait crop works best for the split-layout hero.

## Album art

If you have a square album cover image, you can use it in the Music section.
In `sections/music.js`, replace the `.music__album-art` div contents with:

```html
<img src="assets/images/snooze-ep.jpg" alt="Snooze EP cover" style="width:100%;height:100%;object-fit:cover;" />
```
