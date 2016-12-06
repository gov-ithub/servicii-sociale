import React from 'react';
import { browserHistory } from 'react-router';
import FlatButton from 'material-ui/FlatButton';
import NavigationArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 75px);
  width: calc(100vw - 312px);
  padding-left: 312px;
  @media(max-width: 767px) {
    padding: 20px;
    width: calc(100vw - 40px);
  }
`;
const OverlayBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1201;
  height: 54px;
  width:100vw;
  background-color: rgba(255, 255, 255, 0.6);
`;
const Help = (props) => {
  return (
    <Container>
      <OverlayBar>
        <FlatButton
          label="Inapoi"
          primary={true}
          onTouchTap={browserHistory.goBack}
          style={props.open ? {marginLeft:322,marginTop:8,color:'#333333'} : {marginLeft:64,marginTop:8, color:'#333333'}}
          icon={<NavigationArrowBack color='#333333' />}
        />
      </OverlayBar>
      <div style={{minHeight: '100%', marginTop: '54px', maxWidth: '100vw'}}>
        <h2>Întrebări frecvente</h2>
        <h3>1. Ce reprezintă Harta Serviciilor Sociale Licențiate?</h3>
        <p>Harta Serviciilor Sociale Licențiate este varianta digitalizată a Registrului electronic unic al serviciilor sociale (e-Registru). Aceasta reprezintă o evidență a serviciilor sociale licențiate, acordate de furnizori sociali acreditați.</p>
        <p>Harta este gestionată de Ministerul Muncii, Familiei, Protecției Sociale și Persoanelor Vârstnice și oferă o imagine de ansamblu a serviciilor sociale pe care atât instituțiile publice, cât și cele private le oferă diferitelor categorii de grupuri vulnerabile. Prin intermediul acestei platforme sunt furnizate informații și statistici tuturor cetățenilor interesați.</p>

        <h3>2. La ce foloseste harta?</h3>
        <p>Harta este un instrument util în a identifica centrele rezidențiale și de zi, precum și celelalte forme de serviciile sociale specifice fiecărei categorii de grup vulnerabil, la nivel județean și național. Fiecărui serviciu social în parte îi sunt prezentate datele de contact, adresa, furnizorul acreditat de care aparține, activitățile pe care le desfășoară, dar și capacitatea de care dispune.</p>

        <h3>3. Cum utilizez harta?</h3>
        <p>Pe pagina principală a platformei se regăsesc mai multe filtre care spijină utilizatorul în navigarea acesteia. În funcție de informațiile căutate se pot aplica unul sau mai multe filtre.</p>
        <p>Primul filtru este legat de poziționarea geografică, la nivel de județ. În mod practic, selectând unul dintre județe, harta va arăta toate serviciile sociale ce se află pe raza acelui județ.</p>
        <p>Următoarele filtre țin de tipul și categoria de serviciu social, așa cum au fost stabilite în Nomeclatorul Serviciilor Sociale. Sunt în total 24 de tipuri de servicii sociale și 71 de categorii de servicii. Fiecărui Tip de servicii sociale îi sunt atribuite unul sau mai multe Categorii de servicii. Pentru a selecta categoria de serviciu social, trebui mai întâi selectat tipul, iar apoi harta va genera căutările după filtrele alese.</p>
        <p>Forma de organizare a serviciului social este un filtru care diferențiază centrele rezidențiale, de centrele de zi, de locuițele protejate, de unitățile de îngijire la domiciului etc. În total sunt 9 forme de organizare, după care se poate filtra o căutare.</p>
        <p>Ultimul filtru este dedicat categoriilor de beneficiari cărora li se adresează serviciul social. Beneficiarii sunt împărțiți pe categorii de vârstă, de la copii la persoane vârstnice.</p>

        <h3>4. Cum pot să mă implic?</h3>
        <p>Utilizatorii pot contribui la acuratețea datelor prezentate pe www.harta-furnizori.mmuncii.ro și pot trimite observații și propuneri de îmbunătățire a platformei la adresa de email acreditare@mmuncii.gov.ro.</p>

      </div>
    </Container>
  )
};
export default Help;
