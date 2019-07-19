import '../scss/main.scss';
import $ from 'jquery';
import {data} from '../js/data';
import {layout, intro, skills, work, workDescription, contact } from '../js/templates';

const sectionClick = () => {
	$('.project').on('click mouseover', (e) => {
		let id = $(e.currentTarget).attr('id');
		$('.project').removeClass('active');
		$(e.currentTarget).addClass('active');

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

$( document ).ready(() => {


	$('.container').html(layout());
    $('.intro').html(intro(data.intro));
    $('.skills').html(skills(data.skills));

    $('.work').html(work(data.work));
    $('.contact').html(contact(data.contact));

    sectionClick();
    backBtn();
});