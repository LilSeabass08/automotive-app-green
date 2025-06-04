import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Reilly.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Reilly AI</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Reilly AI</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Welcome to O' Reilly AI" />
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
