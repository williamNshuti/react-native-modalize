import React, { useRef } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Modalize } from "react-native-modalize";
import { faker } from "@faker-js/faker";
import FixedContent from "./src/components/modals/FixedContent";

export default function App() {
  const modalizeRef = useRef(null);
  const openRef = useRef(null);
  const onOpen = () => {
    modalizeRef.current?.open();
  };
  const onOpen2 = () => {
    openRef.current?.open();
  };

  const renderHeader = () => (
    <View style={s.modal__header}>
      <Text style={s.modal__headerText}>50 users online</Text>
    </View>
  );

  const renderContent = () => (
    <View style={s.content}>
      {Array(50)
        .fill(0)
        .map((_, i) => (
          <View style={s.content__row} key={i}>
            <View style={s.content__avatar}>
              <Image
                style={{ width: "100%", height: "100%" }}
                source={{ uri: faker.image.avatar() }}
              />
            </View>

            <Text style={s.content__name}>{faker.name.fullName()}</Text>
          </View>
        ))}
      <View style={s.content__button}>
        <TouchableOpacity
          onPress={onOpen2}
          style={{
            backgroundColor: "#0082B4",
            padding: 16,
            borderRadius: 15,
            marginTop: 20,
          }}
        >
          <Text
            style={{
              color: "white",
            }}
          >
            Open the second modal
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 15,
        backgroundColor: "#fafafa",
      }}
    >
      <TouchableOpacity
        style={{
          backgroundColor: "#0082B4",
          padding: 16,
          borderRadius: 15,
          marginTop: 20,
        }}
        onPress={onOpen}
      >
        <Text>Open the modal</Text>
      </TouchableOpacity>
      <Modalize
        ref={modalizeRef}
        HeaderComponent={renderHeader}
        snapPoint={350}
      >
        {renderContent()}
      </Modalize>
      <FixedContent ref={openRef} data="Let's go" />
    </View>
  );
}

const s = StyleSheet.create({
  modal__header: {
    paddingVertical: 15,
    marginHorizontal: 15,

    borderBottomColor: "#eee",
    borderBottomWidth: 1,
  },

  modal__headerText: {
    fontSize: 15,
    fontWeight: "200",
  },

  content: {
    paddingHorizontal: 15,
  },

  content__row: {
    flexDirection: "row",
    alignItems: "center",

    paddingVertical: 15,

    borderBottomColor: "#f9f9f9",
    borderBottomWidth: 1,
  },

  content__avatar: {
    width: 38,
    height: 38,

    marginRight: 15,

    overflow: "hidden",

    backgroundColor: "#eee",
    borderRadius: 19,
  },

  content__name: {
    fontSize: 16,
  },

  content__button: {
    alignItems: "center",
    justifyContent: "center",

    marginVertical: 20,
  },
});
