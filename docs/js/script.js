const username = '1mag1n33';
const repositoriesToShow = [
  'MCServerManager',
  '1mag1n33-Terminal',
  'mcs-creater-cli',
  'Portfolio'

];
//s
function shouldDisplayRepository(repo) {
  return repositoriesToShow.includes(repo.name);
}

fetch(`https://api.github.com/users/${username}/repos`)
  .then(response => response.json())
  .then(repos => {
    const repoList = document.getElementById('repo-list');

    repos.forEach(repo => {
      if (shouldDisplayRepository(repo)) {
        const repoContainer = document.createElement('div');
        repoContainer.className = 'repository-container';

        const repoNameElement = document.createElement('div');
        repoNameElement.innerHTML = `<h3><a href="${repo.html_url}" target="_blank">${repo.name}</a></h3>`;

        const repoDescriptionElement = document.createElement('div');
        repoDescriptionElement.innerHTML = `<p>${repo.description || 'No description available.'}</p>`;
        
        const repoInfoElement = document.createElement('div');
        repoInfoElement.className = 'repository-info';
        
        repoInfoElement.innerHTML = `<span>Stars: ${repo.stargazers_count}</span><span>Forks: ${repo.forks_count}</span><span>Pull Requests: ${repo.open_issues_count}</span>`;
        
        repoContainer.appendChild(repoNameElement);
        repoContainer.appendChild(repoDescriptionElement);
        repoContainer.appendChild(repoInfoElement);

        repoList.appendChild(repoContainer);
      }
    });
function addProfileImage(container, imageUrl, profileurl) {
  const profileLink = document.createElement('a');
  profileLink.href = profileurl;
  profileLink.target = '_blank';

  const profileImage = document.createElement('img');
  profileImage.src = imageUrl;
  profileImage.alt = 'Profile Picture';

  profileLink.appendChild(profileImage);
  container.appendChild(profileLink);
}

fetch(`https://api.github.com/users/${username}`)
  .then(response => response.json())
  .then(profile => {
    const profileContainer = document.querySelector('.profile');
    const aboutProfileImage = document.querySelector('.about-profile-image');

    addProfileImage(profileContainer, profile.avatar_url, profile.html_url);

    addProfileImage(aboutProfileImage, profile.avatar_url, profile.html_url);

    const profileName = document.createElement('h3');
    profileName.textContent = profile.name;

    const profileBio = document.createElement('p');
    profileBio.textContent = profile.bio || 'No bio available.';

    profileContainer.appendChild(profileName);
    profileContainer.appendChild(profileBio);
  })
  .catch(error => console.error(error));



  })
  .catch(error => console.error(error));
