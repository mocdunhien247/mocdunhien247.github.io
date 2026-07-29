// Khai báo mảng chứa dữ liệu
let resourcesData = [];

// Tải dữ liệu từ file resources.json
fetch('./resources.json')
  .then(response => {
    if (!response.ok) {
      throw new Error("Lỗi khi tải file resources.json");
    }
    return response.json();
  })
  .then(data => {
    resourcesData = data;

    // Tự động tìm và gọi hàm hiển thị danh sách trên trang web của bạn
    if (typeof renderCards === 'function') {
      renderCards(resourcesData);
    } else if (typeof renderResources === 'function') {
      renderResources(resourcesData);
    } else if (typeof displayResources === 'function') {
      displayResources(resourcesData);
    } else if (typeof renderData === 'function') {
      renderData(resourcesData);
    }
  })
  .catch(error => console.error("Lỗi tải dữ liệu:", error));
