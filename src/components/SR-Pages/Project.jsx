import React, {useState, useEffect} from 'react'

export default function Project() {
    const [items, setItems] = useState({})
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(
            import.meta.env.VITE_PROJECT_API_URL
          );
          const data = await response.json();
          setItems(data);
          console.log(data)
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      fetchData();
    }, []);

  return (
    <div
      style={{
        width: "84%",
        display: "flex",
        justifyContent: "center",
        marginLeft: "20%",
        marginTop: "-9%",
      }}
    >
      <div style={{ width: "90%", maxWidth: "1200px", marginBottom: "8%" }}>
        <div
          className="my-4 d-flex"
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <div
            style={{ flexGrow: 1, height: "1px", background: "#FCC54C" }}
          ></div>
          <div
            style={{ flexGrow: 1, height: "1px", background: "#FCC54C" }}
          ></div>
        </div>
        <div
          style={{
            position: "relative",
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          <img
            className="position-relative rounded-4"
            src="https://images.unsplash.com/photo-1572177812156-58036aae439c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9"
            style={{
              width: "100%",
              height: "250px",
              background: "linear-gradient(180deg, #F0EDEC 0%, #B5DFF3 100%)",
              objectFit: "cover",
            }}
            alt="Header Background"
          />
          <h1
            style={{
              position: "absolute",
              top: "85%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "#fff",
            }}
          >
            Projects
          </h1>
        </div>

        <div
          className="my-4 d-flex"
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <div
            style={{ flexGrow: 1, height: "3px", background: "#FCC54C" }}
          ></div>
          <p style={{ margin: "0 10px" }}>
            <b> Ongoing projects </b>
          </p>
          <div
            style={{ flexGrow: 1, height: "3px", background: "#FCC54C" }}
          ></div>
        </div>
        <div>
          <div style={{ background: "rgb(255 249 235)", width: "61vw" }}>
            <ol style={{ marginLeft: "-1%" }}>
              {items &&
                items.arrayOfOngoingProjects &&
                items.arrayOfOngoingProjects.map((item, index) => (
                  <li style={{ marginBottom: "10px", width: "59vw" }}>
                    {item.typeOfProject} project ({item.roleInProject}) titled
                    as "{item.projectTitle}" under the Special Call for the
                    Proposals for the Scheduled Tribes sponsored by{" "}
                    {item.sponsors}
                    {item.collaboration !== "" &&
                      `India in collaboration with ${item.collaboration}`}
                    .{item.date}
                  </li>
                ))}
            </ol>
          </div>
        </div>
        <div
          className="my-4 d-flex"
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <div
            style={{ flexGrow: 1, height: "3px", background: "#FCC54C" }}
          ></div>
          <p style={{ margin: "0 10px" }}>
            <b> funded projects</b>
          </p>
          <div
            style={{ flexGrow: 1, height: "3px", background: "#FCC54C" }}
          ></div>
        </div>
        <div style={{ background: "rgb(255 249 235)", width: "61vw" }}>
          <div>
            <ol style={{ marginLeft: "-1%" }}>
              {items &&
                items.arrayOfFundedProjects &&
                items.arrayOfFundedProjects.map((item, index) => (
                  <li style={{ marginBottom: "10px", width: "59vw" }}>
                    {item.typeOfProject} project ({item.roleInProject}) titled
                    as "{item.projectTitle}" under the Special Call for the
                    Proposals for the Scheduled Tribes sponsored by{" "}
                    {item.sponsors}
                    {item.collaboration !== "" &&
                      `India in collaboration with ${item.collaboration}`}
                    . {item.date}
                  </li>
                ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
