const layout = () => {
	return `<section class="intro"></section>
		<section class="about"></section>
		<section class="work"></section>
		<section class="skills"></section>
		<section class="contact"></section>`
}

const intro = (data) => {
	return `
		<div class="bg"></div>
		<div class="content">
			<div class="intro-name">
				<div class="first">karynn</div>
				<div class="divider"></div>
				<div class="last">elio tran</div>
			</div>
			<div class="subcopy">${data.subcopy}</div>
		</div>`
}

const about = (data) => {
	return `
		<div class="content">
			<div class="about-copy">
				<div class="copy craft">${data.craft}</div>
				<div class="copy about">${data.about}</div>
			</div>
		</div>`
}

const skills = (data) => {
	return `
		<div class="content">
			<div class="skills-title">${data.skillsTitle}</div>
			<div class="skills-list">
				${data.skillsList.map((skill,idx) => {
					return `<div class="skill">${skill}</div>`
				}).join('')}
			</div>
		</div>`
}

const work = (data) => {
	let frontSections = data.projects.map((d, idx) => {
		return `<div class="project" id="${idx}">
			<div class="hero" style="background-image: url('../images/${d.image}')"></div>
			<div class="front">
			</div>
			<div class="back">
				<div class="back-copy" style="color: ${d.color}">${d.hover}</div>
			</div>
		</div>`	
	}).join('')

	return `<div class="content">
		<div class="panel panel-1">
			<div class="grid">${frontSections}</div>
		</div>
		<div class="panel panel-2">
			<div class="back-button"></div>
			<div class="panel-2-inner"></div>
		</div>
	</div>`
}

const workDescription = (data) => {
	return `<div class="project-content">
		<div class="left-col">
			<div class="title">${data.title}</div>
			<div class="client">by <em>${data.company} </em> for <em>${data.client}</em></div>
			<div class="divider"></div>
			<ul class="team">
				<li class="designer"><div class="label">designer</div>${data.design}</li>
				<li class="brandcontent"><div class="label">content</div>${data.brandcontent}</li>	
				<li class="producer"><div class="label">producer</div>${data.producer}</li>	
			</ul>
			<div class="description">${data.description}</div>
		</div>
		<div class="right-col">
			<div class="video">
				<iframe src="https://player.vimeo.com/video/${data.video}" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
				<div class="url"><a href="${data.url}" target="_blank">+ See the experience.</a></div>
			</div>
		</div>
		</div>
	`
}

const contact = (data) => {
	return `
		<div class="content">
			<div class="left-col">
				<div class="contact-copy">
					<div class="contact-me">${data.copy}</div>
					<div class="contact-me-subcopy">${data.subcopy}</div>
				</div>
			</div>
			<div class="right-col">
				<div class="sources">
					${data.sources.map((s,idx) => {
						return `<div class="source">
							<div class="source-copy">${s.sourceCopy}</div>
							<div class="link">
								<a href="${s.link}" class="source-link" target="_blank">${s.source}</a>
							</div>
						</div>`
					}).join('')}
				</div>
			</div>
		</div>`
}

export {
	layout,
	about,
	intro,
	skills,
	work,
	workDescription,
	contact
}