import { firestore } from './../../firebase/utils';

export const handleAddProduct = newProduct => {
  return new Promise((resolve, reject) => {
    firestore.collection('products').doc().set(newProduct)
      .then(() => {
        resolve();
      })
      .catch(() => {
        reject();
      });
  });
};

export const handleFetchProducts = () => {
  return new Promise((resolve, reject) => {
    firestore.collection('products')
      .get()
      .then(snapshot => {
        const snapshotData = snapshot.docs.map(doc => {
          return {
            ...doc.data(),
            documentID: doc.id
          }
        });
        resolve(snapshotData);
      })
      .catch(err => {
        reject(err);
      });
  })
};

export const handleDeleteProduct = documentID => {
  console.log(documentID);
  return new Promise((resolve, reject) => {
    firestore.collection('products').doc(documentID).delete()
      .then(res => {
        resolve();
      })
      .catch(err => {
        reject(err);
      })
  })
};