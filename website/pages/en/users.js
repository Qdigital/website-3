const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;

class Users extends React.Component {
  render() {
    const { config: siteConfig } = this.props;
    if ((siteConfig.users || []).length === 0) {
      return null;
    }

    const editUrl = `${siteConfig.repoUrl}/edit/master/website/siteConfig.js`;
    const showcase = siteConfig.users.map(user => (
      <a
        href={user.infoLink}
        key={user.infoLink}
        className={user.fillBackground ? 'hasBlackBg' : ''}
      >
        <img src={user.image} alt={user.caption} title={user.caption} />
      </a>
    ));

    return (
      <div className="mainContainer">
        <Container padding={['bottom', 'top']}>
          <div className="showcaseSection">
            <div className="prose">
              <h1>Who is Using Terser?</h1>
            </div>
            <div className="logos">{showcase}</div>
            <p>Are you using this project?</p>
            <a href={editUrl} className="button">
              Add your company
            </a>
          </div>
        </Container>
      </div>
    );
  }
}

module.exports = Users;
