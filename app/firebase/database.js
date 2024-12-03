import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";

const db = getFirestore();

// Function to add a user
const addUser = async (user) => {
  try {
    await addDoc(collection(db, "users"), user);
    console.log("User added!");
  } catch (error) {
    console.error("Error adding user: ", error.message);
  }
};

// Function to get all users
const getUsers = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });
  } catch (error) {
    console.error("Error retrieving users: ", error.message);
  }
};

// Function to delete a user by their document ID
const deleteUser = async (userId) => {
  try {
    await deleteDoc(doc(db, "users", userId));
    console.log("User deleted!");
  } catch (error) {
    console.error("Error deleting user: ", error.message);
  }
};
