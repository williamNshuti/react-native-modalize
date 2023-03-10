import React, { useRef, forwardRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Modalize } from "react-native-modalize";
import { faker } from "@faker-js/faker";
import CustomStyle from "./CustomStyle";

const FixedContent = forwardRef((props, ref) => {
  const modalRef = useRef(null);

  const onOpen = () => {
    modalRef.current?.open();
  };

  const renderContent = () => {
    return (
      <View style={s.content}>
        <Text style={s.content__subheading}>{"Last step".toUpperCase()}</Text>
        <Text style={s.content__heading}>Send the message?</Text>
        <Text style={s.content__description}>{faker.lorem.paragraph()}</Text>
        <TextInput style={s.content__input} placeholder="Type your username" />

        <TouchableOpacity
          style={s.content__button}
          activeOpacity={0.9}
          onPress={onOpen}
        >
          <Text style={s.content__buttonText}>
            {`${props.data}`.toUpperCase()}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  const openModal = () => {
    if (this.modal.current) {
      this.modal.current.open();
    }
  };

  const closeModal = () => {
    if (this.modal.current) {
      this.modal.current.close();
    }
  };

  return (
    <>
      <Modalize ref={ref} adjustToContentHeight>
        {renderContent()}
      </Modalize>
      <CustomStyle ref={modalRef} />
    </>
  );
});
export default FixedContent;
const s = StyleSheet.create({
  content: {
    padding: 20,
  },

  content__icon: {
    width: 32,
    height: 32,

    marginBottom: 20,
  },

  content__subheading: {
    marginBottom: 2,

    fontSize: 16,
    fontWeight: "600",
    color: "#ccc",
  },

  content__heading: {
    fontSize: 24,
    fontWeight: "600",
    color: "#333",
  },

  content__description: {
    paddingTop: 10,
    paddingBottom: 10,

    fontSize: 15,
    fontWeight: "200",
    lineHeight: 22,
    color: "#666",
  },

  content__input: {
    paddingVertical: 15,
    marginBottom: 20,

    width: "100%",

    borderWidth: 1,
    borderColor: "transparent",
    borderBottomColor: "#cdcdcd",
    borderRadius: 6,
  },

  content__button: {
    paddingVertical: 15,

    width: "100%",

    backgroundColor: "#333",
    borderRadius: 6,
  },

  content__buttonText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "600",
    textAlign: "center",
  },
});
