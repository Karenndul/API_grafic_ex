        // Load the Visualization API and the corechart package.
        //línea escencial.
      google.charts.load('current', {'packages':['corechart']});
      //hasta que el servidor conteste a mi petición (comunicación asíncrona)
      // Set a callback to run when the Google Visualization API is loaded.
      google.charts.setOnLoadCallback(drawChart);

      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
      function drawChart() {

        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Topping');
        data.addColumn('number', 'Slices');
        data.addRows([
          ['Champiñones', 0.5],
          ['Cebollas', 0.5],
          ['Aceitunas', 0.5],
          ['Zucchini', 0.5],
          ['Pepperoni', 3],
          ['Mole verde', 3],
          ['Queso', 2],
        ]);

        // Set chart options
        var options = {'title':'¿Cuánta pizza comiste anoche?',
                       'width':500,
                       'height':300};

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('grafica_parasaber'));
        chart.draw(data, options);//lo que te va a mostrar en la gráfica
      }
