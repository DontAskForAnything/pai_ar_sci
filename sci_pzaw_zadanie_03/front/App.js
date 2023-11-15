import "./App.css";
import React, {useState, useEffect} from "react";
import axios from "axios";

function App() {
  const [userData, setUserData] = useState(undefined);
  const [newFirstName, setNewFirstName] = useState("");
  const [newLastName, setNewLastName] = useState("");
  const [currentEdit, setCurrentEdit] = useState(-1);
  const [isAddingUser, setIsAddingUser] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8080/pzaw_zadanie_03");
      setUserData({users: response.data});
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleDelete = async (userId) => {
    try {
      await axios.delete(`http://127.0.0.1:8080/pzaw_zadanie_03/${userId}`);
      fetchData();
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const handleAcceptEdit = async (userId) => {
    try {
      await axios.put(`http://127.0.0.1:8080/pzaw_zadanie_03/${userId}`, {
        firstName: newFirstName,
        lastName: newLastName,
      });
      setCurrentEdit(-1);
      setNewLastName("");
      setNewFirstName("");

      fetchData();
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  const handleAddUser = async () => {
    try {
      if (!newFirstName || !newLastName) {
        throw Error("Really? Empty one?");
      }
      await axios.post("http://127.0.0.1:8080/pzaw_zadanie_03", {
        firstName: newFirstName,
        lastName: newLastName,
      });
      setIsAddingUser(false); // Reset the adding user state
      setNewFirstName("");
      setNewLastName("");
      fetchData(); // Update data after adding a user
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  return (
    <div className="container mt-5">
      {isAddingUser ? (
        <div className="mb-3">
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Imię"
            value={newFirstName}
            onChange={(e) => setNewFirstName(e.target.value)}
          />
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Nazwisko"
            value={newLastName}
            onChange={(e) => setNewLastName(e.target.value)}
          />
          <button className="btn btn-success" onClick={handleAddUser}>
            Dodaj
          </button>
        </div>
      ) : (
        <button
          className="btn btn-primary"
          onClick={() => setIsAddingUser(true)}
        >
          Dodaj nowego użytkownika
        </button>
      )}

      <table className="table mt-3">
        <thead>
          <tr>
            <th scope="col">No.</th>
            <th scope="col">Imię</th>
            <th scope="col">Nazwisko</th>
            <th scope="col">Akcje</th>
          </tr>
        </thead>
        <tbody>
          {userData ? (
            userData?.users.map((user, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  {currentEdit === index ? (
                    <input
                      type="text"
                      className="form-control"
                      value={newFirstName}
                      onChange={(e) => setNewFirstName(e.target.value)}
                    />
                  ) : (
                    user.firstName
                  )}
                </td>
                <td>
                  {currentEdit === index ? (
                    <input
                      type="text"
                      className="form-control"
                      value={newLastName}
                      onChange={(e) => setNewLastName(e.target.value)}
                    />
                  ) : (
                    user.lastName
                  )}
                </td>
                <td>
                  {currentEdit === index ? (
                    <>
                      <button
                        className="btn btn-success"
                        onClick={() => handleAcceptEdit(index)}
                      >
                        Akceptuj
                      </button>
                      <button
                        className="btn btn-secondary ms-2"
                        onClick={() => {
                          setCurrentEdit(-1);
                          setNewFirstName("");
                          setNewLastName("");
                        }}
                      >
                        Anuluj
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        className="btn btn-warning"
                        onClick={() => {
                          setCurrentEdit(index);
                          setNewFirstName(user.firstName);
                          setNewLastName(user.lastName);
                        }}
                      >
                        Edytuj
                      </button>
                      <button
                        className="btn btn-danger ms-2"
                        onClick={() => handleDelete(index)}
                      >
                        Usuń
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4}>Brak dostępnych użytkowników</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;
