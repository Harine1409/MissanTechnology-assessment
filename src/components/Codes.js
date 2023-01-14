import React from "react";
import recycle from "../../public/assests/icons8-recycle-50.png";
import { Modal, Button } from "react-bootstrap";

class Codescomponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      List: [
        {
          id: 1,
          selected: false,
          name: "BULGARIAN",
          language: "Най-добър до",
          image: recycle
        },
        {
          id: 2,
          selected: false,
          name: "Chinese",
          language: "保质期（至）",
          image: recycle
        },
        {
          id: 3,
          selected: false,
          name: "GEORGIAN",
          language: "მოხმარების ვადა",
          image: recycle
        }
      ],
      MasterChecked: false,
      SelectedList: [],
      modal: false,
      Type: "",
      ActionIndex: -1,
      CurrentItem: ""
    };
  }

  // Select/ UnSelect Table rows
  onMasterCheck(e) {
    let tempList = this.state.List;
    // Check/ UnCheck All Items
    tempList.map((user) => (user.selected = e.target.checked));

    //Update State
    this.setState({
      MasterChecked: e.target.checked,
      List: tempList,
      SelectedList: this.state.List.filter((e) => e.selected)
    });
  }

  // Update List Item's state and Master Checkbox State
  onItemCheck(e, item) {
    let tempList = this.state.List;
    tempList.map((user) => {
      if (user.id === item.id) {
        user.selected = e.target.checked;
      }
      return user;
    });

    //To Control Master Checkbox State
    const totalItems = this.state.List.length;
    const totalCheckedItems = tempList.filter((e) => e.selected).length;

    // Update State
    this.setState({
      MasterChecked: totalItems === totalCheckedItems,
      List: tempList,
      SelectedList: this.state.List.filter((e) => e.selected)
    });
  }

  // Event to get selected rows(Optional)
  getSelectedRows() {
    this.setState({
      SelectedList: this.state.List.filter((e) => e.selected)
    });
  }

  Handleedit(index) {
    this.setState({
      modal: true,
      Type: "edit",
      ActionIndex: index,
      CurrentItem: this.state.List[index]
    });
  }

  HandleDelete(index) {
    this.setState({
      modal: true,
      Type: "delete",
      ActionIndex: index,
      CurrentItem: this.state.List[index]
    });
  }
  CloseinitModal = () => {
    this.setState({ modal: false });
  };

  OkinitModal = () => {
    let { List } = this.state;
    this.setState({ modal: false });
    if (this.state.Type === "edit") {
      List[this.state.ActionIndex].name = this.state.CurrentItem.name;
      List[this.state.ActionIndex].language = this.state.CurrentItem.language;
    } else {
      List.splice(this.state.ActionIndex, 1);
    }
    this.setState({ List });
  };

  nameEdit = (e) => {
    let { CurrentItem } = this.state;
    CurrentItem.name = e.target.value;
    this.setState({ CurrentItem });
  };

  languageEdit = (e) => {
    let { CurrentItem } = this.state;
    CurrentItem.language = e.target.value;
    this.setState({ CurrentItem });
  };
  render() {
    return (
      <>
        <Modal show={this.state.modal}>
          <Modal.Header closeButton onClick={this.CloseinitModal}>
            <Modal.Title>
              {this.state.Type === "edit" ? "Edit" : "Delete"}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {this.state.Type === "edit" ? (
              <div>
                English:{" "}
                <input
                  id="0"
                  onChange={(e) => {
                    this.nameEdit(e);
                  }}
                  className="textboxarea"
                  type="text"
                />
                <br></br> Best Before{" "}
                <input
                  id="1"
                  onChange={(e) => {
                    this.languageEdit(e);
                  }}
                  className="textboxarea"
                  type="text"
                />
              </div>
            ) : (
              <div>Are You Sure you want to Delete ?</div>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="danger"
              onClick={(e) => {
                this.CloseinitModal();
              }}
            >
              Close
            </Button>
            <Button
              variant="dark"
              onClick={(e) => {
                this.OkinitModal();
              }}
            >
              {this.state.Type === "edit" ? "Save" : "Delete"}
            </Button>
          </Modal.Footer>
        </Modal>

        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        checked={this.state.MasterChecked}
                        id="mastercheck"
                        onChange={(e) => this.onMasterCheck(e)}
                      />
                    </th>
                    <th scope="col">English</th>
                    <th scope="col">Best before</th>
                    <th scope="col">Images</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.List.map((user, index) => (
                    <tr
                      key={user.id}
                      className={user.selected ? "selected" : ""}
                    >
                      <th scope="row">
                        <input
                          type="checkbox"
                          checked={user.selected}
                          className="form-check-input"
                          id="rowcheck{user.id}"
                          onChange={(e) => this.onItemCheck(e, user)}
                        />
                      </th>
                      <td>{user.name}</td>
                      <td>{user.language}</td>
                      <td>
                        <img src={recycle}></img>
                      </td>
                      <td>
                        <button
                          className="editbtn"
                          onClick={() => this.Handleedit(index)}
                        >
                          edit
                        </button>
                      </td>
                      <td>
                        <button
                          className="deletebtn"
                          onClick={() => this.HandleDelete(index)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Codescomponent;
