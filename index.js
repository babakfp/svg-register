;(_=> {
	const svg_register = document.querySelector('svg-register') // <svg-register />
	const svg_register__svgs = svg_register.querySelectorAll('svg') // <svg-register> <svg /> </svg-register>
	const svg_use__list = document.querySelectorAll('svg-use') // <svg-register> <svg /> </svg-register>

	const insertAfter = (newNode, referenceNode) => {
		// Added cloneNode to stop the element from being removed by default.
		referenceNode.parentNode.insertBefore(newNode.cloneNode(true), referenceNode.nextSibling)
	}

	svg_use__list.forEach(use => {
		
		svg_register__svgs.forEach(svg => {

			// <svg name="" />
			if (!svg.getAttribute('name')) {
				console.log(svg)
				throw '<svg> `name` attr in <svg-register> couldn\'t be found.'
			}

			// <svg-use name="" />
			if (!use.getAttribute('name')) {
				console.log(use)
				throw '<svg-use> `name` attr couldn\'t be found.'
			}

			if (svg.getAttribute('name') === use.getAttribute('name')) {
				// Adding <svg-use /> attrs to <svg />
				for (const [_, attr] of Object.entries(use.attributes)) {
					svg.setAttribute(attr.name, attr.value)
				}

				// Removing <svg name="" /> because we don't need it anymore.
				svg.removeAttribute('name')

				// Adding <svg /> after <svg-use />, the same place that the <svg-use /> is used.
				insertAfter(svg, use)

				// Removing <svg-use /> because we don't need it anymore.
				use.remove()
			}

		})

		// Removing <svg-register /> because we don't need it anymore.
		svg_register.remove()

	})
})()