## css添加动画

```html

<transition appear>
    <Login class="login" v-show="isLogin"/>
</transition>
```

```css
/*  进的过程*/
.v-enter-active {
    animation: blog 0.5s linear;
}

/*离开的过程*/
.v-leave-active {
    animation: blog 0.5s linear reverse;
}

/*从左边出现， 然后停滞*/
@keyframes blog {
    from {
        transform: translateX(-100%);
    }
    to {
        transform: translateX(0px);
    }
}
```