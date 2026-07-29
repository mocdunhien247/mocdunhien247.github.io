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
    
    // Đã tải xong dữ liệu -> Gọi hàm renderCards() để hiện lên màn hình ngay!
    if (typeof renderCards === 'function') {
      renderCards();
    }
  })
  .catch(error => {
    console.error("Lỗi tải dữ liệu:", error);
  });
