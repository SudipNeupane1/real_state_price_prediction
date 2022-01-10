from project import app
from project import util1
from project import main1
if __name__ == '__main__':
    # load_saved_artifacts()
    # print(get_location_names())
    # print(get_estimated_price('1st Phase JP Nagar',1000, 3, 3))
    # print(get_estimated_price('1st Phase JP Nagar', 1000, 2, 2))
    # print(get_estimated_price('Kalhalli', 1000, 2, 2)) 
    # print(get_estimated_price('Ejipura', 1000, 2, 2))  
    util1.load_saved_artifacts()
    app.run(debug=True)
