import axios from "axios";
import React, {useEffect, useState} from "react";

const Dashboard = () => {
  const [token, setToken] = useState("");

  const [userData, setUserData] = useState(undefined);
  const [newFirstName, setNewFirstName] = useState("");
  const [newLastName, setNewLastName] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [currentEdit, setCurrentEdit] = useState(-1);
  const [isAddingUser, setIsAddingUser] = useState(false);

  useEffect(() => {
    if (token) {
      fetchData();
    }
  }, [token]);
  useEffect(() => {
    let token = window.sessionStorage.getItem("token");
    if (token) {
      setToken(token);
    } else {
      setToken("");
    }
  }, [window.sessionStorage.getItem("token")]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8080/pzaw_zadanie_03",
        {
          headers: {
            Authorization: token,
          },
        }
      );
      //@ts-ignore
      setUserData({users: response.data});
    } catch (error) {
      alert(error.response.data);
      setToken("");
    }
  };

  const handleDelete = async (userId) => {
    try {
      await axios.delete(`http://127.0.0.1:8080/pzaw_zadanie_03/${userId}`, {
        headers: {
          Authorization: token,
        },
      });
      fetchData();
    } catch (error) {
      alert(error.response.data);
    }
  };

  const handleAcceptEdit = async (userId) => {
    try {
      const token = window.sessionStorage.getItem("token");
      await axios.put(
        `http://127.0.0.1:8080/pzaw_zadanie_03/${userId}`,
        {firstName: newFirstName, lastName: newLastName},
        {
          headers: {
            Authorization: token,
          },
        }
      );
      setCurrentEdit(-1);
      setNewLastName("");
      setNewPassword("");
      setNewFirstName("");
      fetchData();
    } catch (error) {
      alert(error.response.data);
    }
  };

  const handleAddUser = async () => {
    try {
      const token = window.sessionStorage.getItem("token");
      if (!newFirstName || !newLastName || !newPassword) {
        throw Error("Really? Empty one?");
      }
      await axios.post(
        "http://127.0.0.1:8080/pzaw_zadanie_03",
        {
          firstName: newFirstName,
          lastName: newLastName,
          password: newPassword,
        },
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );
      setIsAddingUser(false);
      setNewFirstName("");
      setNewLastName("");
      fetchData();
    } catch (error) {
      alert(error.response.data);
    }
  };

  const handleNewPassword = async (userId) => {
    let newPassword = prompt("New password for this user:");
    if (newPassword) {
      try {
        const token = window.sessionStorage.getItem("token");
        await axios.put(
          `http://127.0.0.1:8080/pzaw_zadanie_03/${userId}/password`,
          {password: newPassword},
          {
            headers: {
              Authorization: token,
            },
          }
        );
      } catch (error) {
        alert(error.response.data);
      }
    } else {
      alert("Password can't be empty!");
    }
  };

  if (!token) {
    return (
      <div className="container mt-5">
        <div className="jumbotron text-center">
          <h1 className="display-4">You are not logged in</h1>
          <p className="lead">Click here to login</p>
          <a href="/login" className="btn btn-primary">
            Login
          </a>
        </div>
      </div>
    );
  }
  return (
    <>
      <button
        type="button"
        className="btn  fixed-bottom  fixed-right m-3"
        onClick={() => {
          window.sessionStorage.removeItem("token");
          setToken("");
        }}
      >
        Sign Out
      </button>

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
            <input
              type="password"
              className="form-control mb-2"
              placeholder="Hasło"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
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
              //@ts-ignore
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
                          className="btn btn-warning ms-2"
                          onClick={() => handleNewPassword(index)}
                        >
                          Hasło
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
    </>
  );
};

export default Dashboard;
