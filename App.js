import * as React from 'react'
import { Text, View, StyleSheet, FlatList, Pressable, Image, Modal } from 'react-native'
import Constants from 'expo-constants'

const ShowDetalhes = ({ display, toogleModal, mensagem }) => (
  <Modal
    animationType="slide"
    transparent={true}
    visible={display}
    onRequestClose={toogleModal}
  >
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <Pressable onPress={toogleModal}>
          <Text>{mensagem}</Text>
        </Pressable>
      </View>
    </View>
  </Modal>

)

const Pessoa = ({ nome, email, link }) => {
  const [modal, setModal] = React.useState(false)

  function mudaModal() {
    setModal(!modal)
  }

  return (
    <View>
      <ShowDetalhes display={modal} toogleModal={mudaModal} mensagem={email} />
      <Pressable onPress={mudaModal}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: link,
          }}
        />
        <Text style={styles.paragraph}>{nome}</Text>
      </Pressable>
    </View>
  )
}

export default function App() {
  function meuItem({ item }) {
    let nomeCompleto = item.first_name + " " + item.last_name

    return (
      <Pessoa nome={nomeCompleto}
        link={item.avatar}
        email={item.email}
      />
    )
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={meuItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 12,
    padding: 12,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'pink'
  },
  tinyLogo: {
    width: 50,
    height: 50,
    alignSelf: 'center'
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
})

const DATA = [
  {
    "id": 7,
    "email": "madara.uchiha@reqres.in",
    "first_name": "Madara",
    "last_name": "Uchiha",
    "avatar": "https://media4.giphy.com/media/8qXJTU5oEhQZO/200.gif"
  },
  {
    "id": 8,
    "email": "l.lawliet@reqres.in",
    "first_name": "L",
    "last_name": "Lawliet",
    "avatar": "https://criticalhits.com.br/wp-content/uploads/2021/05/thumb-1920-667210_8vpz-910x512.jpg"
  },
  {
    "id": 9,
    "email": "tanjiro.kamado@reqres.in",
    "first_name": "Tanjiro",
    "last_name": "Kamado",
    "avatar": "http://pm1.narvii.com/7378/5623dfb9533b07c62ece9048a7ba002e8a016263r1-640-640v2_00.jpg"
  },
  {
    "id": 10,
    "email": "shigeo.kageyama@reqres.in",
    "first_name": "Shigeo",
    "last_name": "Kageyama",
    "avatar": "https://i.pinimg.com/originals/6d/d8/2f/6dd82f4eec117743074abfd5e5021682.png"
  },
  {
    "id": 11,
    "email": "eren.yeager@reqres.in",
    "first_name": "Eren",
    "last_name": "Yeager",
    "avatar": "https://criticalhits.com.br/wp-content/uploads/2020/07/eren-titan-capitulo-130-shingeki-no-kyojin.jpg"
  },
  {
    "id": 12,
    "email": "shinji.ikari@reqres.in",
    "first_name": "Shinji",
    "last_name": "Ikari",
    "avatar": "https://64.media.tumblr.com/532eb198ea0cb0a2b18022b1a6bb71f6/tumblr_mtgoh0d6jO1qzhgaao6_1280.png"
  }
]