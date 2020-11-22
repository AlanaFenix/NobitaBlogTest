import PostManager from './PostManager'
import categoryModel from '../providers/schemas/categoryModel'

class CategoryManager extends PostManager {
    constructor() {
        super();
    }

    async getCategoryByName(object: { name: String}) {
        if(typeof object !== "object") throw new Error("categoryManager.getCategoryByName() - This method type must be an object");
        
        return await categoryModel.findOne({ 'name': object.name});
    }
    addCategory() {}
    updateCategory() {}
    deleteCategory() {}
}


export default CategoryManager;