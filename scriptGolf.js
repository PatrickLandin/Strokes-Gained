$(document).ready(function() {
	var stats = {
		number.sort(function(a, b) {
			a = new Number(a);
			b = new Number(b);
			return a - b;
		});
	};
	
	$('.sortableStatistics').each(function() {
		var $table = $(this);
		var $tableBody = $table.find('tableBody');
		var $statTypes = $table.find('th');
		var rows = $statBody.find('tr').toArray();

		$statTypes.on('click', function() {
			var $header = $(this);
			var order = $header.data('sort');
			var column;

			if ($header.is('.ascending') || $header.is('.descending')) {
				$header.toggleClass('ascending descending');
				$tableBody.append(rows.reverse());

			} else {

				$header.addClass('ascending');
				$header.siblings().removeClass('ascending descending');
				
				if (stats.hasOwnProperty(order)) {
					column = $statTypes.index(this);

					rows.sort(function(a, b) {
  					a = $(a).find('td').eq(column).text();
  					b = $(b).find('td').eq(column).text();
  					return stats[order](a, b);
					});

					$tableBody.append(rows);
				}
	    }
	  });
	});
});