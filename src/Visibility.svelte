<script>
    import {onMount} from 'svelte';

    export let top = 0;
    export let bottom = 0;
    export let left = 0;
    export let right = 0;

    export let steps = 100;

    let element;
    let percent;
    let observer;
    let unobserve = () => {};
    let intersectionObserverSupport = false;

    function intersectPercent(entries) {
        entries.forEach(entry => {
			console.log(viewportHeight)
			console.log(entry.intersectionRect)
            percent = Math.round(Math.ceil(Math.max(entry.intersectionRatio, entry.intersectionRect.height / viewportHeight) * 100));
        })
    }

    function stepsToThreshold(steps) {
        return [...Array(steps).keys()].map(n => n / steps)
    }

    onMount(() => {
        intersectionObserverSupport =
                'IntersectionObserver' in window &&
                'IntersectionObserverEntry' in window &&
                'intersectionRatio' in window.IntersectionObserverEntry.prototype;

        const options = {
            rootMargin: `${top}px ${right}px ${bottom}px ${left}px`,
            threshold: stepsToThreshold(steps)
        };

        if (intersectionObserverSupport) {
            observer = new IntersectionObserver(intersectPercent, options);
            observer.observe(element);
            unobserve = () => observer.unobserve(element);
        }

        return unobserve;
    });

	let viewportHeight = 0
</script>
<svelte:window bind:outerHeight={viewportHeight}/>

<div bind:this={element}>
    <slot {percent} {unobserve} {intersectionObserverSupport}/>
</div>
