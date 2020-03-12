var btnUpload = $("#upload_file"),
		btnOuter = $(".button_outer");
	btnUpload.on("change", function(e){
		var ext = btnUpload.val().split('.').pop().toLowerCase();
		if($.inArray(ext, ['gif','png','jpg','jpeg']) == -1) {
			$(".error_msg").text("Not an Image...");
		} else {
			$(".error_msg").text("");
			btnOuter.addClass("file_uploading");
			setTimeout(function(){
				btnOuter.addClass("file_uploaded");
			},3000);
			var uploadedFile = URL.createObjectURL(e.target.files[0]);
			setTimeout(function(){
				$("#uploaded_view").append('<img src="'+uploadedFile+'" />').addClass("show");
				$("#b_compress").attr("style", "display:block");
			},3500);
		}
	});
	$(".file_remove").on("click", function(e){
		$("#uploaded_view").removeClass("show");
		$("#uploaded_view").find("img").remove();
		btnOuter.removeClass("file_uploading");
		btnOuter.removeClass("file_uploaded");
	    $("#b_compress").attr("style", "display:none");
	});

// css custom range

const range = document.getElementById('range');

range.addEventListener('input', (e) => {
	// Get the label (which is the nextElementSibling)
	const label = e.target.nextElementSibling;
	// Get value of the input
	const value = +e.target.value;
	// Get the width value of the input
	const range_width = getComputedStyle(e.target).getPropertyValue('width');
	// Get the width value of the label
	const label_width = getComputedStyle(label).getPropertyValue('width');
	// Remove 'px' and conver to number
	const num_width = +range_width.substring(0, range_width.length - 2);
	const num_label_width = +label_width.substring(0, label_width.length - 2);
	// Get min and max values
	const max = +e.target.max;
	const min = +e.target.min;
	// Calculate the left value
	const left = value * (num_width / max) - num_label_width / 2 + scale(value, min, max, 10, -10);

	label.style.left = `${left}px`;
	label.innerHTML = value;
});

// From StackOverflow: https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}
