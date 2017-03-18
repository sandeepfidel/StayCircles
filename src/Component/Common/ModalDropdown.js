import React, {
	Component,
	PropTypes
} from "react";
import {
	StyleSheet,
	Dimensions,
	View,
	Text,
	ListView,
	Image,
	TouchableWithoutFeedback,
	TouchableOpacity,
	TouchableHighlight,
	Modal,
	ActivityIndicator
} from "react-native";
const styles = StyleSheet.create({
	button: {
		flexDirection: "row",
		alignItems: "center"
	},
	buttonText: {
		fontSize: 18,
		color: "lightgray",
		padding: 2
	},
	modal: {
		flex: 1
	},
	dropdown: {
		borderWidth: StyleSheet.hairlineWidth,
		borderColor: "lightgray",
		borderRadius: 2,
		backgroundColor: "white",
		justifyContent: "center"
	},
	loading: {
		alignSelf: "center"
	},
	list: {
		flex: 1
	},
	rowText: {
		flex: 1,
		marginHorizontal: 6,
		fontSize: 20,
		height: 32,
		lineHeight: 32,
		color: "lightgray",
		textAlignVertical: "center"
	},
	highlightedRowText: {
		color: "lightgray"
	},
	separator: {
		height: StyleSheet.hairlineWidth,
		backgroundColor: "lightgray"
	}
});
export default class ModalDropdown extends Component {
	static propTypes = {
		disabled: PropTypes.bool,
		defaultIndex: PropTypes.number,
		selectedIdx: PropTypes.number,
		defaultValue: PropTypes.string,
		options: PropTypes.arrayOf(PropTypes.string),
		containerStyle: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
		textStyle: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
		dropdownStyle: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
		renderRow: PropTypes.func,
		onDropdownWillShow: PropTypes.func,
		onDropdownWillHide: PropTypes.func,
		onSelect: PropTypes.func,
		children: PropTypes.object
	}
	static defaultProps = {
		disabled: false,
		defaultIndex: -1,
		defaultValue: "Please select...",
		options: null,
		selectedIdx: -1
	}
	constructor(props) {
		super(props);
		this.updatePosition = this.updatePosition.bind(this);
		this._button = null;
		this._buttonFrame = null;
		this._nextValue = null;
		this._nextIndex = null;
		this.state = {
			disabled: props.disabled,
			loading: props.options == null,
			showDropdown: false,
			buttonText: props.defaultValue,
			selectedIndex: props.defaultIndex,
			selectedIdx: props.selectedIdx
		};
	}
	componentWillReceiveProps(nextProps) {
		let buttonText = this._nextValue == null ? this.state.buttonText : this._nextValue;
		let selectedIndex = this._nextIndex == null ? this.state.selectedIndex : this._nextIndex;
		if (selectedIndex < 0) {
			selectedIndex = nextProps.defaultIndex;
			if (selectedIndex < 0) {
				buttonText = nextProps.defaultValue;
			}
		}
		this._nextValue = null;
		this._nextIndex = null;
		this.setState({
			disabled: nextProps.disabled,
			loading: nextProps.options == null,
			buttonText,
			selectedIndex
		});
	}

	updatePosition() {
	}
	_updatePosition(callback) {
		if (this._button && this._button.measure) {
			this._button.measure((fx, fy, width, height, px, py) => {
				this._buttonFrame = {
					x: px,
					y: py,
					w: width,
					h: height
				};
				callback && callback();
			});
		}
	}
	show() {
		this._updatePosition(() => {
			this.setState({
				showDropdown: true
			});
		});
	}
	hide() {
		this.setState({
			showDropdown: false
		});
	}
	select(idx) {
		let value = this.props.defaultValue;
		if (idx == null || this.props.options == null || idx >= this.props.options.length) {
			idx = this.props.defaultIndex;
		}
		if (idx >= 0) {
			value = this.props.options[idx];
		}
		this._nextValue = value;
		this._nextIndex = idx;
		this.setState({
			buttonText: value,
			selectedIndex: idx
		});
	}
	_renderButton() {
		const i = this.state.selectedIdx;
		return (
			<TouchableOpacity
				ref={(button) => (this._button = button)}
				disabled={this.props.disabled}
				onPress={this._onButtonPress.bind(this)}
			>
				{
					this.props.children ||
					(
						<View style={[styles.button, this.props.containerStyle]}>
							<View style={{ flex: 7 }}>
								<Image source={require('../../images/menu.png')}/>
							</View>
						</View>
					)
				}
			</TouchableOpacity>
		);
	}
	_onButtonPress() {
		if (!this.props.onDropdownWillShow ||
			this.props.onDropdownWillShow() !== false) {
			this.show();
		}
	}
	_renderModal() {
		if (this.state.showDropdown && this._buttonFrame) {
			const frameStyle = this._calcPosition();
			return (
				<Modal
					animationType="none"
					transparent={true}
					onRequestClose={this._onRequestClose.bind(this)}
				>
					<TouchableWithoutFeedback onPress={this._onModalPress.bind(this)}>
						<View style={styles.modal}>
							<View style={[styles.dropdown, this.props.dropdownStyle, frameStyle]}>
								{this.state.loading ? this._renderLoading() : this._renderDropdown()}
							</View>
						</View>
					</TouchableWithoutFeedback>
				</Modal>
			);
		}
	}
	_calcPosition() {
		const dimensions = Dimensions.get("window");
		const windowWidth = dimensions.width;
		const windowHeight = dimensions.height;
		let dropdownHeight;
		if (this.props.options.length < 5) {
			dropdownHeight = (this.props.options.length) * 32;
		} else {
			dropdownHeight = 32 * 5;
		}
		const bottomSpace = windowHeight - this._buttonFrame.y - this._buttonFrame.h;
		const rightSpace = windowWidth - this._buttonFrame.x;
		const showInBottom = bottomSpace >= dropdownHeight || bottomSpace >= this._buttonFrame.y;
		const showInLeft = rightSpace >= this._buttonFrame.x;
		const style = {
			height: dropdownHeight,
		};
		if (showInLeft) {
			style.left = this._buttonFrame.x;
		} else {
			const dropdownWidth = (this.props.dropdownStyle && StyleSheet.flatten(this.props.dropdownStyle)
					.width) ||
				(this.props.style && StyleSheet.flatten(this.props.style.width)) || -1;
			if (dropdownWidth !== -1) {
				style.width = dropdownWidth;
			}
			style.right = rightSpace - this._buttonFrame.w;
		}
		return style;
	}
	_onRequestClose() {
		if (!this.props.onDropdownWillHide ||
			this.props.onDropdownWillHide() !== false) {
			this.hide();
		}
	}
	_onModalPress() {
		if (!this.props.onDropdownWillHide ||
			this.props.onDropdownWillHide() !== false) {
			this.hide();
		}
	}
	_renderLoading() {
		return (
			<ActivityIndicator size="small" />
		);
	}
	_renderDropdown() {
		return (
			<ListView
				style={styles.list}
				dataSource={this._dataSource}
				renderRow={this._renderRow.bind(this)}
				renderSeparator={this._renderSeparator.bind(this)}
				automaticallyAdjustContentInsets={false}
			/>
		);
	}
	get _dataSource() {
		const ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		});
		return ds.cloneWithRows(this.props.options);
	}
	_renderRow(rowData, sectionID, rowID, highlightRow) {
		const key = `row_${rowID}`;
		const highlighted = rowID === this.state.selectedIndex;
		const row = !this.props.renderRow ? (<Text style={[styles.rowText, highlighted && styles.highlightedRowText]}>
			{rowData}
		</Text>) : this.props.renderRow(rowData, rowID, highlighted);
		return (
			<TouchableHighlight
				key={key}
				onPress={() => {
					this._onRowPress(rowData, sectionID, rowID, highlightRow);
				}}
			>
				{row}
			</TouchableHighlight>
		);
	}
	_onRowPress(rowData, sectionID, rowID, highlightRow) {
		if (!this.props.onSelect ||
			this.props.onSelect(rowID, rowData) !== false) {
			highlightRow(sectionID, rowID);
			this._nextValue = rowData;
			this._nextIndex = rowID;
			this.setState({
				buttonText: rowData,
				selectedIndex: rowID
			});
		}
		if (!this.props.onDropdownWillHide ||
			this.props.onDropdownWillHide() !== false) {
			this.setState({
				showDropdown: false
			});
		}
	}
	_renderSeparator(sectionID, rowID) {
		if (rowID === this.props.options.length - 1) {
			return;
		}
		const key = `spr_${rowID}`;
		return (
			<View
				style={styles.separator}
				key={key}
			/>);
	}
	_renderNoDropdownIcon() {
		console.log(" ============ _renderNoDropdownIcon ============ ");
	}
	render() {
		return (
			<View {...this.props} >
				{this._renderButton()}
				{this._renderModal()}
			</View>
		);
	}
}