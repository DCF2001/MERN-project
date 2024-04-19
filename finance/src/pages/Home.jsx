import React from 'react';

export default function Home() {
  return (
    <div>
      <div style={imageContainerStyle}>
        <img src="./public/img1.jpg" alt="Description of the image" style={imageStyle} />
      </div>
      <div style={descriptionStyle}>
        <p className='text-slate-500' style={{ color: '#114232', fontWeight: 'bold', fontSize: '2.5rem', textAlign: 'center' }}>WHO WE ARE</p>
        <p style={{ fontSize: '1.0rem' }}>We are Sri Lanka's first on-demand mobile platform that facilitates a sustainable waste management solution for the end-user. We aim to provide convenient waste management solutions while educating users on the benefits of recycling. Eco Friends by Neptune focuses on helping households, and enterprises with a better and sustainable waste management process while supporting the entire ecosystem and key stakeholders.</p>
        <p style={{ fontSize: '1.0rem' }}>The Eco Friends app was launched in 2019 as a technology-enabled waste management concept designed, developed, and operated by a few eco-conscious founders. Identifying the gap in the existing waste management process, a solution was built to provide a convenient and efficient disposal service that perfectly suits the busy lifestyles of today's consumers. The process also ensures that there is no leakage of waste into the environment within operations. The end-to-end service starts from the collection to the disposal of waste in a sustainable manner and all collected recyclable material is segregated and redistributed for the recycling process. EcoFriends goes further from the traditional waste collection with its Collect – Recycle – Reward model.</p>
      </div>
      <div className="max-w-6xl mx-auto p-8">
        <h2 className='font-bold text-sm sm:text-2xl'>Our Team</h2>
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          {/*<input type="text" placeholder="Search by ID" style={searchInputStyle} />*/}
        </div>
        <table style={tableStyle}>
          <thead>
            <tr>
             {/* <th>Name</th>
              <th>ID</th>
  <th>Contact</th>*/}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Kavinga Aluwihare</td>
              <td>FM3456</td>
              <td>+1 123-456-7890</td>
            </tr>
            <tr>
              <td>Dinula Fonseka</td>
              <td>FM2345</td>
              <td>+1 987-654-3210</td>
            </tr>
            <tr>
              <td>Sithmi Shehara</td>
              <td>FM1234</td>
              <td>+1 123-456-7890</td>
            </tr>
            <tr>
              <td>Devindi Chandrasekara</td>
              <td>FM4567</td>
              <td>+1 123-456-7890</td>
            </tr>
            <tr>
              <td>Sakuni Ganepola</td>
              <td>FM5678</td>
              <td>+1 123-456-7890</td>
            </tr>
            <tr>
              <td>Dasuni Wanasinghe</td>
              <td>FM6789</td>
              <td>+1 123-456-7890</td>
            </tr>
            <tr>
              <td>Shehan Rashmika</td>
              <td>FM7890</td>
              <td>+1 123-456-7890</td>
            </tr>
            <tr>
              <td>Amal Perera</td>
              <td>FM2456</td>
              <td>+1 123-456-7890</td>
            </tr>
            <tr>
              <td>Anura Kumara</td>
              <td>FM9876</td>
              <td>+1 123-456-7890</td>
            </tr>
            {/* Add more team members here */}
          </tbody>
        </table>
      </div>
      <div style={image2ContainerStyle}>
        <pr><pr><pr></pr></pr></pr>
        <img src="./public/img2.jpg.jpeg" alt="Description of the image" style={image2Style} />
      </div>
    </div>
  );
}

// Styles
const imageContainerStyle = {
  textAlign: 'center',
};

const imageStyle = {
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
  maxWidth: '100%',
  width: '1200px',
  height: '400px',
};

const image2ContainerStyle = {
  textAlign: 'center',
};

const image2Style = {
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
  maxWidth: '100%',
  width: '1000px',
  height: '300px',
};

const descriptionStyle = {
  textAlign: 'center',
  marginTop: '10px', // Adjust as needed
};

const searchInputStyle = {
  width: '200px',
  padding: '5px',
};

const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
  marginTop: '20px',
};

