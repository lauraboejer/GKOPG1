// Importerer React-elementer
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons"

// Importerer komponenter
// Idet EditProfile og RegisteredEvents endnu ikke er implementeret, er disse udkommentere
import HobbyList from "./components/HobbyList";
import HobbyDetails from "./components/HobbyDetails";
import AddEditHobby from "./components/AddEditHobby";
import Profile from "./components/Profile";
import SavedHobbies from "./components/SavedHobbies";
// import EditProfile from "./components/EditProfile";
// import RegisteredEvents from "./components/RegisteredHobbies";

// Importerer Firebase-elementer
import firebase from "firebase/compat";

// Konfigurering af Firebase-databasen
const firebaseConfig = {
    apiKey: "AIzaSyCIjQFfPNmoZ9UYLC0kz-w5d6FQfj5u67c",
    authDomain: "gkopg1-9b5fa.firebaseapp.com",
    projectId: "gkopg1-9b5fa",
    storageBucket: "gkopg1-9b5fa.appspot.com",
    messagingSenderId: "434585776012",
    appId: "1:434585776012:web:3a8eb09c3d5fd7636630a9",
    databaseURL: "https://gkopg1-9b5fa-default-rtdb.europe-west1.firebasedatabase.app/"
};

// Initierer Firebase-applikation
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

// Deklarerer navigationselementer
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Opretter ExploreEventsNavigator-funktion, som returnerer stack-screens for liste af events og event-detaljer
function ExploreEventsNavigator() {
    return(
        <Stack.Navigator>
            <Stack.Screen name = "Event List" component = { HobbyList }/>
            <Stack.Screen name = "Event Details" component = { HobbyDetails }/>
        </Stack.Navigator>
    );
}

// Opretter ProfileNavigator-funktion, som returnerer stack-screens profil-detaljer, rediger profil og tilmeldte events
function ProfileNavigator() {
    return(
        <Stack.Navigator>
            <Stack.Screen name = "Profile" component = { Profile }/>
            {/*disse to screens er endnu ikke implementerede, hvorfor de er udkommenteret*/}
            {/*<Stack.Screen name = "Edit Profile" component = { EditProfile }/>*/}
            {/*<Stack.Screen name = "Registered Events" component = { RegisteredEvents }/>*/}
        </Stack.Navigator>
    );
}

// Opretter SavedEventsNavigator-funktion, som returnerer stack-screens for liste af gemte events og event-detaljer
function SavedEventsNavigator() {
    return(
        <Stack.Navigator>
            <Stack.Screen name = "My Saved Events" component = { SavedHobbies }/>
            <Stack.Screen name = "Saved Event Details" component = { HobbyDetails }/>
        </Stack.Navigator>
    );
}

// Opretter App-funktion, som returnerer de forskellige tab-screens i bunden af applikationen
export default function App() {
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name = "Explore Events" component = { ExploreEventsNavigator } options = { { tabBarIcon: () => (
                    <Ionicons name = "globe" size = { 20 }/>), headerShown: null } }/>
                <Tab.Screen name = "Saved Events" component = { SavedEventsNavigator } options = { { tabBarIcon: () => (
                    <Ionicons name = "heart" size = { 20 }/>), headerShown: null } }/>
                <Tab.Screen name = "My Profile" component = { ProfileNavigator } options = { { tabBarIcon: () => (
                    <Ionicons name = "person" size = { 20 }/>), headerShown: null } }/>
                <Tab.Screen name = "Add Event" component = { AddEditHobby } options = { { tabBarIcon: () => (
                    <Ionicons name = "add" size = { 20 }/>), headerShown: null } }/>
            </Tab.Navigator>
        </NavigationContainer>
    );
};
