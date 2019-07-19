const layout = () => {
	return `<section class="about"></section>
		<section class="work"></section>
		<section class="contact"></section>`
}

const intro = (data) => {
	return `
		<div class="content">
			<div class="title">${data.title}</div>
			<div class="intro-copy">${data.introCopy}</div>
		</div>`
}

const about = (data) => {
	return `<div>about</div>`
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
		<div class="panel panel-2"></div>
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
				<iframe src="https://player.vimeo.com/video/348948974" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
				<div class="url">+ See the experience.</div>
			</div>
		</div>
		</div>
	`
}

const contact = (data) => {
	return `
		<div class="content">
			${data.sources.map((s,idx) => {
				return `<div class="source">${s.source}</div>`
			}).join('')}
		</div>`
}

export {
	layout,
	intro,
	about,
	work,
	workDescription,
	contact
}