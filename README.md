# gulp-rem-plus

gulp 对px单位的css属性自动转化为rem为单位的插件,基于rem的解决方案[rem-core](https://www.npmjs.com/package/rem-core)的二次开发。


## flexible.js
默认可以配合淘宝的[flexible.js](https://github.com/amfe/lib-flexible)使用

## Option

```javascript
gulp.task('build', function() {
    return gulp.src('./demo.css')
        .pipe(rem({
            rem: 750,
            dpr: 2
        }))
        .pipe(gulp.dest('./aio'))
});
```


## Usage

```css
body {
    border-top: 1px;
    border-bottom: 10px;
    padding: 10px; /* @norem */
    background-size: 10px 10px;
}
```

输出:

```css
body {
    border-top: 1px;
    border-bottom: 0.5557rem;
    padding: 10px;
    background-size: 0.5557rem 0.5557rem;
}
```



## changelog

<table>
    <thead>
        <tr>
            <th>版本</th>
            <th>类型</th>
            <th>说明</th>
        </tr>
    </thead>
    <tbody> 
        <tr>
            <td>-</td>
            <td>-</td>
            <td>-</td>
        </tr>
    </tbody>
</table>