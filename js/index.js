import '../scss/main.scss';
import $ from 'jquery';
import {data} from '../js/data';
import {layout, intro, about, skills, work, workDescription, contact } from '../js/templates';

let section = 1;

const sectionClick = () => {
	$('.project').on('click mouseover', (e) => {
		let id = $(e.currentTarget).attr('id');
		$('.project').removeClass('selected');
		$(e.currentTarget).addClass('selected');

		if (e.type === 'click') {
			let projectIdx = $(e.currentTarget).attr('id');
			$('.work').addClass('shrink');
			$('.panel-2-inner').html(workDescription(data.work.projects[projectIdx]))	
		}
	})
}

const backBtn = () => {
	$('.back-button').on('click', () => {
		$('.work').removeClass('shrink');
	})
}

const scrolling = () => {
	let sections = $('section').length;
	let windowHeight = $(window).height();
	// let scrollTop = $(window).scrollTop();
	let sectionHeight = windowHeight / sections;
	let frameHeight = $('.container').height();

		// console.log(sectionHeight, scrollTop);

	$(window).on('scroll', (e) => {
		let ypos = $(window).scrollTop();
		let percent = (ypos / windowHeight) * 100;
		let sect = Math.floor((ypos / frameHeight * 5) + .75);
		console.log(sect)

		if (!$('section').eq(sect).hasClass('active') ) {
			$('section').eq(sect).addClass('active');
		}

	})

	// $(window).on('scroll', function(){
	// 	let s = $(window).scrollTop(),
	// 		d = $(document).height(),
	// 		c = $(window).height();

	// 	let scrollPercent = (s / (d - c)) * 100;
	// 	console.log(scrollPercent);
	// })
}

$( document ).ready(() => {
	$('.container').html(layout());
    $('.intro').html(intro(data.intro));
    $('.about').html(about(data.about));
    $('.skills').html(skills(data.skills));
    $('.work').html(work(data.work));
    $('.contact').html(contact(data.contact));

    sectionClick();
    backBtn();
    scrolling();

   	setTimeout(() => {
   		$('.intro').addClass('active');
   	}, 500)

});