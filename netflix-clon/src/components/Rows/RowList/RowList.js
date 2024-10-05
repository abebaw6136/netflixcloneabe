import React from 'react';
import Row from '../Row/Row';
import requests from '../../../utils/requests';


const RowList = () => {  // Change {} to () here
    return (
      <>
        <Row 
          title="NETFLIX ORIGINALS"
          fetchUrl={requests.fetchNetflixOriginals}  // fix typo in "fetchUrl"
          isLargeRow={true}  // fix typo in "isLargeRow"
        />
        <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
        <Row title="Top Rated" fetchUrl={requests.fetchTrending} />
        <Row title="Action Movies" fetchUrl={requests.fetchTrending} />
        <Row title="Comedy Movies" fetchUrl={requests.fetchTrending} />
        <Row title="Horror Movies" fetchUrl={requests.fetchTrending} />
        <Row title="Romance Movies" fetchUrl={requests.fetchTrending} />
        <Row title="TV Shows" fetchUrl={requests.fetchTrending} />
        <Row title="Documentaries" fetchUrl={requests.fetchTrending} />
      </>
    );
  }
  
  export default RowList;