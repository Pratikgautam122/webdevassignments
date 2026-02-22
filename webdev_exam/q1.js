fetch('https://jsonplaceholder.typicode.com/comments')
      .then(function(response) {
        return response.json();
      })
      .then(function(comments) {
        document.getElementById('status').textContent = '';
        var list = document.getElementById('list');

        comments.forEach(function(comment) {
          var li = document.createElement('li');
          li.innerHTML = 'Name: ' + comment.name + '<br>' +
                         'Email: ' + comment.email + '<br>' +
                         'Body: ' + comment.body + '<br>'+'<br>';
          list.appendChild(li);
        });
      })
      .catch(function() {
        document.getElementById('status').textContent = 'Failed to load data';
      });
