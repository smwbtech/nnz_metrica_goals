function $ymt_filtering(e) {
    if(ym && typeof ym === 'function') {
        ym(48468320,'reachGoal','filtering');
    }
}

function $ymt_filtering_init() {
	const filterFormSelector =
		'.filterForm.filter_body';
	const form = document.querySelector(filterFormSelector);
	if (form) {
		form.addEventListener('click', $ymt_filtering, {
			once: true,
		});
	}
}

(function () {
	if (document.readyState !== 'complete') {
		window.addEventListener('load', $ymt_filtering_init);
	} else {
		$ymt_filtering_init();
	}
})();