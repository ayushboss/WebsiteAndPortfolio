var database = firebase.database();
var list = document.getElementById('post_list_cardview');
var recent_posts = document.getElementById('recent_posts');

function readingAllChildren() {
	return database.ref('/posts').once('value').then(function(snapshot) {
		snapshot.forEach(function(childSnapshot) {
			var link = document.createElement('a');
			link.href= "../blog/posts/" + childSnapshot.key + ".html";
			var card = document.createElement('div');

			var rDate = childSnapshot.val().date;
			
			var entry = document.createElement('h2');
			var subEntry = document.createElement('p');
			var dateEntry = document.createElement('p');

			entry.appendChild(document.createTextNode(childSnapshot.val().title));
			subEntry.appendChild(document.createTextNode('\n' + childSnapshot.val().description));
			dateEntry.appendChild(document.createTextNode('\n' + rDate));

			dateEntry.style.cssFloat = "right";

			card.appendChild(dateEntry);
			card.appendChild(entry);
			card.appendChild(subEntry);
			card.appendChild(document.createElement('hr'));

			link.appendChild(card);
			//link.appendChild(document.createElement('hr'));

			link.style.textDecoration = "none";
			link.style.color = "white";

			recent_posts.appendChild(link);
		});
	});
}
readingAllChildren();