// https://leetcode.com/problems/employee-importance/description/

/*
// Employee info
class Employee {
public:
    // It's the unique ID of each node.
    // unique id of this employee
    int id;
    // the importance value of this employee
    int importance;
    // the id of direct subordinates
    vector<int> subordinates;
};
*/
class Solution {
public:
    int getImportance(vector<Employee*> employees, int id) {
        int importance = 0;

		for (auto val : employees) {
			if (val->id == id) {
				importance += val->importance;
				for (auto subEmployee : val->subordinates) {
					importance += this->getImportance(employees, subEmployee);
				}
			}
		}

		return importance;
    }
};