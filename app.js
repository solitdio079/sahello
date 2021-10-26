let tl = gsap.timeline({
    scrollTrigger: {
        trigger: '#main'
    }
});
tl.from(".product", { y: -300, x: 300, stagger: .6, ease: 'elastic(1,0.3)', duration: 2 });
