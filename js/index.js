import '../scss/main.scss';
import $ from 'jquery';
import {data} from '../js/data';
import {layout, intro, about, work, workDescription, contact } from '../js/templates';

const sectionClick = () => {
	$('.project').on('click mouseover', (e) => {
		let id = $(e.currentTarget).attr('id');
		$('.project').removeClass('active');
		$(e.currentTarget).addClass('active');

		if (e.type === 'click') {
			let projectIdx = $(e.currentTarget).attr('id');
			$('.work').addClass('shrink');
			$('.panel-2').html(workDescription(data.work.projects[projectIdx]))	
		}
	})
}

$( document ).ready(() => {


	$('.container').html(layout());
    $('.about').html(intro(data.intro));
    $('.work').html(work(data.work));
    $('.contact').html(contact(data.contact));

    sectionClick();
});