document.addEventListener('DOMContentLoaded', function() {
    const profileAvatar = document.querySelector('.profile-avatar');
    const profileName = document.querySelector('.profile-name');
    const profileUsername = document.querySelector('.profile-username');
    const reposElement = document.getElementById('repos');
    const followersElement = document.getElementById('followers');
    const followingElement = document.getElementById('following');
    const profileLink = document.querySelector('.profile-link');
    const messageElement = document.getElementById('message');

    messageElement.textContent = 'Carregando...';

    fetch('https://api.github.com/users/brunocoitinho')
    .then(function(response) {

        if (!response.ok) {
            throw new Error('requisição não foi bem sucedida');
        }

        return response.json();
    })
    .then(function(json) {
        profileAvatar.src = json.avatar_url;
        profileName.textContent = json.name;
        profileUsername.textContent = `@${json.login}`;
        reposElement.textContent = json.public_repos;
        followersElement.textContent = json.followers;
        followingElement.textContent = json.following;
        profileLink.href = json.html_url;
        messageElement.textContent = '';
    })
    .catch(function(error) {
        messageElement.textContent = 'Erro ao carregar os dados do perfil.';
        profileName.textContent = '';
        profileUsername.textContent = '';
        reposElement.textContent = '0';
        followersElement.textContent = '0';
        followingElement.textContent = '0';
        profileAvatar.src = 'https://placehold.co/180x180?text=Erro';
        profileLink.href = '#';
        console.error('Houve um problema com a requisição:', error);
    });



})