import { gsap } from 'gsap'

function HeroAnimation() {
	const t1 = gsap.timeline({
		scrollTrigger: {
			start: 'top 60%',
			trigger: '.section-1',
			end: 'top 60%',
			toggleActions: 'restart play reverse none'
		}
	})
	t1.to(
		'.c1',
		{ x: 200, r: 1000, duration: 1, strokeWidth: 1, ease: 'power1.out' },
		0
	)
	t1.to(
		'.c2',
		{ r: 400, duration: 1, strokeWidth: 0.8, ease: 'power1.out' },
		0.1
	)
	t1.to(
		'.c3',
		{ r: 600, duration: 1, strokeWidth: 0.8, ease: 'power1.out' },
		0.1
	)
	t1.fromTo(
		'#para1',
		{
			opacity: 0,
			x: '-100'
		},
		{
			opacity: 1,
			x: 0,
			duration: 0.5,
			ease: 'ease.in'
		}
	)
	t1.fromTo(
		'#para2',
		{
			opacity: 0,
			x: '-100'
		},
		{
			opacity: 1,
			x: 0,
			duration: 0.5,
			ease: 'ease.in'
		}
	)
	return t1
}

function Section2Animation() {
	const timeline = gsap.timeline({
		scrollTrigger: {
			start: 'top 20%',
			trigger: '.section-2',
			toggleActions: 'restart play reverse none',
			end: 'top 20%',
			pin: true
		}
	})
	timeline.fromTo(
		'.overlay-1',
		{
			height: '100%'
		},
		{
			height: 0,
			duration: 1,
			ease: 'ease.in',
			delay: 0.3
		}
	)
	timeline.fromTo(
		'.overlay-2',
		{
			height: '100%'
		},
		{
			height: 0,
			duration: 1,
			ease: 'ease.in',
			delay: -0.3
		}
	)
	timeline.fromTo(
		'.content-wrapper',
		{
			transform: 'translate(0,100%)'
		},
		{
			transform: 'translate(0,0)',
			duration: 1,
			ease: 'ease.in',
			delay: -0.3
		}
	)
	return timeline
}

export default function LandingAnimation() {
	HeroAnimation()
	Section2Animation()
}
