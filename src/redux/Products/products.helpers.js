import { firestore } from './../../firebase/utils';

export const handleAddProduct = product => {
  return new Promise((resolve, reject) => {
    firestore
      .collection('products')
      .doc()
      .set(product)
      .then(() => {
        resolve();
      })
      .catch(err => {
        reject(err);
      })
  });
}

export const handleFetchProducts = ({ filterType, startAfter, endAt }) => {
  return new Promise((resolve, reject) => {
    let ref = firestore.collection('products').orderBy('createdDate').limit(6)
    if (filterType) ref = ref.where('productCategory', '==', filterType);

    if (startAfter) ref = ref.startAfter(startAfter)
    if (endAt) ref = ref.endAt(endAt)

    ref
      .get()
      .then(snapshot => {

        if (snapshot.docs.length < 1) reject('No results');


        const productsArray = snapshot.docs.map(doc => {
          return {
            ...doc.data(),
            documentID: doc.id
          }
        });

        var lastVisible = snapshot.docs[snapshot.docs.length - 1];
        resolve({ data: productsArray, lastDoc: lastVisible });
      })
      .catch(err => {
        reject(err);
      })
  })
}

export const handleDeleteProduct = documentID => {
  console.log(documentID, 1)
  return new Promise((resolve, reject) => {
    firestore
      .collection('products')
      .doc(documentID)
      .delete()
      .then(() => {
        console.log(documentID, 2)
        resolve();
      })
      .catch(err => {
        reject(err);
      })
  });
}