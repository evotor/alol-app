
function handleMoment(context, navigation) {
  navigation.pushView("card-input", {
    receipt: context.receipt;
  })
}
