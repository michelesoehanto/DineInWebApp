<template>
  <div class="card">
    <div class="card-header border-0">
      <div class="row align-items-center">
        <div class="col">
          <h3 class="mb-0">Latest Reviews <i class="ni ni-sound-wave"></i></h3>
        </div>
        <div class="col text-right">
          <base-button size="sm" type="primary">See all</base-button>
        </div>
      </div>
    </div>

    <div class="table-responsive">
      <base-table thead-classes="thead-light"
                  :data="tableData">
        <template slot="columns">
          <th>Customer</th>
          <th>Date of Visit</th>
          <th>Review</th>
          <th>Satisfaction Rating</th>
        </template>

        <template slot-scope="{row}">
          <th scope="row">
            {{row.name}}
          </th>
          <td>
            {{row.date}}
          </td>
          <td>
            {{row.review}} <!-- Fix width or allow wrapping of text in cell -->
          </td>
          <td>
            <div class="d-flex align-items-center">
              <span class="mr-2">{{row.rating}}%</span>
              <base-progress :type="row.progressType"
                             class="pt-0"
                             :show-percentage="false"
                             :value="row.rating"
              />
            </div>
          </td>
        </template>

      </base-table>
    </div>

  </div>
</template>
<script>
  export default {
    name: 'RestaurantNotifsTable',
    data() {
      return {
        tableData: [
          {
            name: 'Axel Lau',
            date: '22 September 2020',
            review: 'Excellent steak, great value for money, waffles are better tho :)',
            rating: 85,
            progressType: 'gradient-danger',
          },
          {
            name: 'Christopher Liew',
            date: '20 September 2020',
            review: 'The French Onion Soup was sublime!!! Definitely a must have at Les Bouchons',
            rating: 90,
            progressType: 'gradient-primary',
          },
          {
            name: 'Michele Soehanto',
            date: '17 September 2020',
            review: 'Great service and steak. Will be back for more ^^',
            rating: 95,
            progressType: 'gradient-warning',
          },
          {
            name: 'Koay Tze Min',
            date: '15 September 2020',
            review: 'An OG french steakhouse by the Singapore River with amazing steaks. 10/10',
            rating: 99,
            progressType: 'gradient-success',
          },
          {
            name: 'Thangamani R.',
            date: '15 September 2020',
            review: 'Good steak, great service.',
            rating: 80,
            progressType: 'gradient-info',
          }
        ]
      }
    }

  }
</script>
<style>
</style>
