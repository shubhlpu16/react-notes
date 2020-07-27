import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { convertToDateFormat } from '../../utils/HelperMethods';
import NewForm from '../../components/newForm/NewForm';
import EditForm from '../../components/editForm/EditForm';
import Modal from '../../components/Modal/Modal';
import Cards from '../../components/Cards/Cards';
import {
  addToNotesStore,
  removeNotesToStore,
  editNotesOfStore,
} from '../../actions/notes';
// import PropTypes from 'prop-types';
import  './Home.css';

class Home extends React.Component {
  static propTypes = {
    notes: PropTypes.array.isRequired,
    addToNotesStore: PropTypes.func.isRequired,
    removeNotesToStore: PropTypes.func.isRequired,
    editNotesOfStore: PropTypes.func.isRequired,
  };

  static contextTypes = {
    store: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      title: '',
      description: '',
    };
  }

  onChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  onEditSave = note => {
    this.setState({ showEditModal: false });
    this.props.editNotesOfStore(note);
  };

  onSave = note => {
    this.props.addToNotesStore([note]);
    this.setState({ title: '', description: '' });
  };

  onDiscard = () => {
    this.setState({
      title: '',
      description: '',
      showEditModal: false,
      showModal: false,
    });
  };

  handleDelete = index => {
    this.setState({ showModal: false }, () =>
      this.props.removeNotesToStore(index),
    );
  };

  handleEdit = (i, note) => {
    this.setState({
      showEditModal: true,
      selectedNote: note,
      selectedIndex: i,
    });
  };

  handleCardClick = (note, index) => {
    this.setState({
      showModal: true,
      selectedNote: note,
      selectedIndex: index,
    });
  };

  displayModal = props => {
    const bodyStyles = {
      borderRadius: '4px',
      padding: '24px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    };
    return (
      <Modal {...props} bodyStyles={bodyStyles}>
        <div>
          <div className="modalTitle">{this.state.selectedNote.title}</div>
          <hr />
          <p>{this.state.selectedNote.description}</p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          {convertToDateFormat(this.state.selectedNote.selectedDate)}
          <div style={{ display: 'flex' }}>
            <img
              src="/images/delete.svg"
              alt="delete"
              role="presentation"
              style={{ cursor: 'pointer', marginRight: '8px' }}
              onClick={() => this.handleDelete(this.state.selectedIndex)}
            />
            <img
              src="/images/edit.svg"
              alt="delete"
              style={{ cursor: 'pointer' }}
              role="presentation"
              onClick={() =>
                this.setState({ showEditModal: true, showModal: false })
              }
            />
          </div>
        </div>
      </Modal>
    );
  };

  displayEditModal = props => {
    const bodyStyles = {
      borderRadius: '4px',
      padding: '24px',
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      background: 'rgb(43 45 54)',
    };
    return (
      <Modal {...props} bodyStyles={bodyStyles} key="edit">
        <EditForm
          heading={`Edit Note (${convertToDateFormat(
            this.state.selectedNote.selectedDate,
          )})`}
          handleSave={this.onEditSave}
          handleDiscard={this.onDiscard}
          title={this.state.selectedNote.title}
          index={this.state.selectedIndex}
          description={this.state.selectedNote.description}
        />
      </Modal>
    );
  };

  render() {
    return (
      <div className={`root custom-scrolbar`}>
        <div className={`rootcontainer`}>
          <NewForm
            heading="Add Note"
            handleChange={this.onChange}
            handleSave={this.onSave}
            handleDiscard={this.onDiscard}
            title={this.state.title}
            description={this.state.description}
          />
          <Cards
            heading="My Notes"
            notes={this.props.notes}
            deleteNote={this.handleDelete}
            editNote={this.handleEdit}
            handleCardClick={this.handleCardClick}
          />
        </div>
        {this.state.showModal
          ? this.displayModal({
              showModal: this.state.showModal,
              toggleModal: () => this.setState({ showModal: false }),
            })
          : null}
        {this.state.showEditModal
          ? this.displayEditModal({
              showModal: this.state.showEditModal,
              toggleModal: () => this.setState({ showEditModal: false }),
            })
          : null}
      </div>
    );
  }
}
export default connect(
  store => ({
    notes: store.notesStore.notes,
  }),
  { addToNotesStore, removeNotesToStore, editNotesOfStore },
)(Home);
