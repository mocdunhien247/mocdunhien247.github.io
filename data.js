let resourcesData = [];

// Tải dữ liệu từ file resources.json
fetch('./resources.json')
  .then(response => {
    if (!response.ok) {
      throw new Error("Không thể tải file resources.json");
    }
    return response.json();
  })
  .then(data => {
    resourcesData = data;
    
    // Gọi lại hàm vẽ giao diện web của bạn (ví dụ: renderResources() hoặc displayData())
    if (typeof renderResources === 'function') {
      renderResources();
    }
  })
  .catch(error => {
    console.error("Lỗi tải dữ liệu:", error);
  });
